let reducer = function(state=initialState, action) {

	switch(action.type){
		case 'SAVE_TITLE_AND_DUEDATE':
			return state;

		case 'ONCHANGE_TITLE':
			   return Object.assign({},state,{
				titleDueDateObj:{
					title:action.titleDueDateObj.title
				}
			},...state.titleDueDateObj);
  
		case 'ONCHANGE_DUEDATE':
			   return state;

		case 'ONCHANGE_LEARNING_OBJECTIVES':
			return Object.assign({},state,{
				learningObjectivesObj:{
					text:action.learningObjectivesObj.text
				}
			},...state.learningObjectivesObj);

		case 'SAVE_DESCRIPTION':
				return state;

		case 'ONCHANGE_DESCRIPTION':
			return Object.assign({},state,{
				descriptionObj:{
					text:action.descriptionObj.text
				}
			},...state.descriptionObj);

		case 'ONCLICK_ON_DESCRIPTION':
		console.log("ACTION : "+action.descriptionObj.styleEnable)
			return Object.assign({},state,{
				descriptionObj:{
					styleEnable:action.descriptionObj.styleEnable
				}
			},...state.descriptionObj);



		

		default:
			return state;
	}

}

export default reducer

 