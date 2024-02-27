import { useState } from "react"
function AddRemoveInputField() {

    const [inputFields, setInputFields] = useState([{
        fullName: '',

    }]);

    const addField = () => {

        setInputFields([...inputFields, {
            fullName: '',
        }])

    }
    const removeField = (index) => {
        const rows = [...inputFields];
        rows.splice(index, 1);
        setInputFields(rows);
    }
    const handleChange = (index, evnt) => {

        const { name, value } = evnt.target;
        const list = [...inputFields];
        list[index][name] = value;
        setInputFields(list);
    }
    return (

        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                    {
                        inputFields.map((data, index) => {
                            const { fullName, emailAddress, salary } = data;
                            return (
                                <div className="row my-3" key={index}>
                                    <div className="col d-flex justify-content-between">
                                        <div className="form-group col-10">
                                            <input type="text" onChange={(evnt) => handleChange(index, evnt)} value={fullName} name="fullName" className="form-control" placeholder="Full Name" />
                                        </div>
                                        <div>
                                            <button className="btn btn-outline-success " onClick={addField}>+</button>
                                        </div>
                                        <div>
                                            {(inputFields.length !== 1) ? <button className="btn btn-outline-danger" onClick={removeField}>x</button> : ''}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    )
}
export default AddRemoveInputField