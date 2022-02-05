const initialState = {
	component: ''
};

const componentChange = (state = initialState, action) => {
	switch (action.type) {
		case 'meter-master': {
			return {
				...state,
				component: 'MeterMaster'
			};
		}
		case 'dcu-master': {
			return {
				...state,
				component: 'NavBar'
			};
		}
		case 'sim-master': {
			return {
				...state,
				component: 'SimMaster'
			};
		}
		case 'pt-master': {
			return {
				...state,
				component: 'ParameterThresholdpage'
			};
		}
		case 'new-meter': {
			return {
				...state,
				component: 'BasicTabs'
			};
		}
		case 'search': {
			return {
				...state,
				component: 'Search'
			};
		}
		case 'billing-determinants': {
			return {
				...state,
				component: 'BillingDeterminants'
			};
		}
		case 'am-summary': {
			return {
				...state,
				component: 'AMSummary'
			};
		}
		case 'am-installed': {
			return {
				...state,
				component: 'AMInstalled'
			};
		}
		case 'am-communicated': {
			return {
				...state,
				component: 'AMCommunicated'
			};
		}
		case 'am-commissioned': {
			return {
				...state,
				component: 'AMComissioned'
			};
		}
		case 'load-profile-report': {
			return {
				...state,
				component: 'LoadProfileReport'
			};
		}
		case 'submitscreen': {
			return {
				...state,
				component: 'MaterialChart'
			}
		}
		case 'meter-communication': {
			return {
				...state,
				component: 'MeterCommunication'
			};
		}
		case 'meter-parameter': {
			return {
				...state,
				component: 'MeterParameter'
			};
		}
		case 'tampers-events': {
			return {
				...state,
				component: 'TampersAndEventsPage'
			};
		}
		case 'power-factor-report': {
			return {
				...state,
				component: 'PowerFactorReport'
			};
		}
		case 'billing-demand-report': {
			return {
				...state,
				component: 'BillingDemandReport'
			};
		}
		case 'event-summary-report': {
			return {
				...state,
				component: 'EventSummaryReportPage'
			};
		}
		case 'event-individual-report': {
			return {
				...state,
				component: 'EventIndividualReportPage'
			};
		}
		case 'billing-energy-report': {
			return {
				...state,
				component: 'BillingEnergyReportPage'
			};
		}
		case 'billing-consumption-report': {
			return {
				...state,
				component: 'BillingConsumptionReportPage'
			};
		}
		default: {
			return state;
		}
	}
};

export default componentChange;
