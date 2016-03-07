let actions ={


	/*Title and Due Date*/
	saveTitleAndDueDate:function(title,date){

		alert("saveTitleAndDueDate-->"+title+"-"+date)

		return{
			type:"SAVE_TITLE_AND_DUEDATE",
			titleDueDateObj:{
				title:title,
			    date:date
			}
			
		}
		
	},

	onChangeTitle:function(title){
		return{
			type:"ONCHANGE_TITLE",
			titleDueDateObj:{
				title:title		 
			}
			
		}
	},

	onChangeDueDate:function(date){
		return{
			type:"ONCHANGE_DUEDATE",
			titleDueDateObj:{
				date:date		 
			}
		}
	},

	/*learning objectives*/

	saveLearningObjectives:function(learningObj){
		alert("saveLearningObjectives-->"+learningObj)
		return{
			type:'SAVE_LEARNING_OBJECTIVES',
			learningObjectivesObj:{
				text:learningObj
			}
		}
	},

	onChangeLearningObjectives:function(learningObj){
		console.log("onChangeLearningObjectives " +learningObj)
		return{
			type:'ONCHANGE_LEARNING_OBJECTIVES',
			learningObjectivesObj:{
				text:learningObj
			}
		}
	},	

	/*description*/
	saveDescription:function(desc){
		alert("saveDescription-->"+desc)
		return{
			type:'SAVE_DESCRIPTION',
			descriptionObj:{
				text:desc
			}
		}
	},
	onChangeDescription:function(desc){
		console.log("onChangeLearningObjectives " +desc)
		return{
			type:'ONCHANGE_DESCRIPTION',
			descriptionObj:{
				text:desc
			}
		}
	},

	/*Student Submission*/
	




}
export default actions