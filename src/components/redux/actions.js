let actions ={

	saveTitleAndDueDate:function(title,dueDate){

		alert("saveTitleAndDueDate-->"+title+"-"+dueDate)

		return{
			type:"SAVE_TITLE_AND_DUEDATE",
			title:title,
			dueDate:dueDate
		}
		
	}

}
export default actions