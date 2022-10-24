import data from 'C:/Users/cedri/Downloads/data.json'

export type GoodPractices = {
	Family: string,
	Id: string,
	Planet: string,
	People: string,
	Prosperity: string,
	Recommendation: string,
	Criteria: string,
	Justification: string,
	Stage: string,
	Tests: {
		1: string,
		2: string,
		3: string
	}
	Correspondence: string,
	Link: string,
	Type: string,
	Difficulty: string,
	Goal: string,
	Incontournable: string,
	Tags: string,
	Actors: string,
	Indicators: {
		_: string,
		X: string,
		Y: string
	}
	Priority: string,
	Recurrence: string,
	UseCase: string,
	Example: string,
	Limit: string,
	Automatizable: string,
	AutomatizationScript: string,
	AutomatizationLevel: string,
	AutomatizationInformation: string
}

export default abstract class GoodPracticesModel {

	public static readonly getGoodPractices = () => {
		const goodPractices: GoodPractices[] = []
		data.map(value => {
      goodPractices.push({
        Family: value.FIELD1,
        Id: value.FIELD2,
        Planet: value.FIELD3,
        People: value.FIELD4,
        Prosperity: value.FIELD5,
        Recommendation: value.FIELD6,
        Criteria: value.FIELD7,
        Justification: value.FIELD8,
        Stage: value.FIELD9,
        Tests: {
          1: value.FIELD10,
          2: value.FIELD11,
          3: value.FIELD12
        },
        Correspondence: value.FIELD13,
        Link: value.FIELD14,
        Type: value.FIELD15,
        Difficulty: value.FIELD16,
        Goal: value.FIELD17,
        Incontournable: value.FIELD18.toLocaleUpperCase(),
        Tags: value.FIELD19,
        Actors: value.FIELD20,
        Indicators: {
          _: value.FIELD21,
          X: value.FIELD22,
          Y: value.FIELD23
        },
        Priority: value.FIELD24,
        Recurrence: value.FIELD25,
        UseCase: value.FIELD26,
        Example: value.FIELD27,
        Limit: value.FIELD28,
        Automatizable: value.FIELD29,
        AutomatizationScript: value.FIELD30,
        AutomatizationLevel: value.FIELD31,
        AutomatizationInformation: value.FIELD32
      })
    })
		return goodPractices
	}
}