let warrantyHeader = document.createElement("h1")
warrantyHeader.textContent = "Warranty Information"
document.body.append(warrantyHeader)

function LabelBox(data){
    
let Label = document.createElement("label")
Label.textContent = (data)
document.body.append(Label)

let Input = document.createElement("input")
document.body.append(Input)
}

LabelBox("FirstName")
// let Space = document.creatElement("")
// document.body.append(Space)
LabelBox("LastName")
LabelBox("Company Name")
LabelBox("Email")
LabelBox("Phone Number")
LabelBox("Fax Number")
LabelBox("Address")
LabelBox("City")
LabelBox("State")
LabelBox("Zip")
LabelBox("Country")
LabelBox("Unit Information")
LabelBox("Date of Purchase")
LabelBox("Model")
LabelBox("Warranty Serial Number")