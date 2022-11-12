import data from '../data/data.json'
import Storage from '../modules/storage/SessionStorage'
import GoodPracticesModel, { Filters } from './GoodPractices'

export type Cart = { id: string }

export default class CartModel {
	private static cart: Cart[] = GoodPracticesModel.getGoodPracticesWithFilter(Filters.incontournable, Filters.incontournable).map(practice => {
		return { id: practice.Id }
	})

	public static readonly get = () => {
		const cookies = Storage.get('cart')
		if (cookies) return cookies
		return CartModel.cart
	}

	public static readonly add = async (practice: Cart) => {
		let isExist = false
		CartModel.cart.map(value => {
			if (value.id == practice.id) {
				isExist = true
				return
			}
		})
		if (!isExist) {
			CartModel.cart.push(practice)
			this.save()
			return true
		}
		return false
	}

	public static readonly remove = (practice: Cart) => {
		let isIncontournable = false
		data.map(value => {
			if (value.Id == practice.id && value.Incontournable == Filters.incontournable.toUpperCase()) isIncontournable = true
		})
		if (isIncontournable) return false
		CartModel.cart = CartModel.cart.filter(value => value.id != practice.id)
		this.save()
		return true
	}

	public static readonly save = () => {
		Storage.set('cart', CartModel.cart)
	}

}