let actions ={

	saveTitleAndDueDate:function(title,dueDate){

		alert("saveTitleAndDueDate-->"+title+"-"+dueDate)

		return{
			type:"SAVE_TITLE_AND_DUEDATE",
			title:title,
			dueDate:dueDate
		}
		
	},

	saveLearningObjectives:function(learningObj){
		alert("saveLearningObjectives-->"+learningObj)
		return{
			type:'SAVE_LEARNING_OBJECTIVES',
			learningObj:learningObj
		}
	},
	saveDescription:function(desc){
		alert("saveDescription-->"+desc)
		return{
			type:'SAVE_DESCRIPTION',
			desc:desc
		}
	}

}
export default actions