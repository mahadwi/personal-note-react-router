import React from "react";
import SaveButton from "../components/SaveButton";
import { addNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";

function AddPageWrapper(){
  const navigate = useNavigate();
  return <AddPage navigate={navigate} />
}

class AddPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        title: '',
        body: ''
    }

    this.onInputHandler = this.onInputHandler.bind(this);
    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onSaveEventHandler = this.onSaveEventHandler.bind(this);
  }

  onInputHandler(event) {
    this.setState(() => {
      return {
        body: event.target.innerHTML,
      };
    });
  }

  onTitleChangeHandler(event){
    this.setState(() => {
        return {
            title: event.target.value
        }
    })
  }

  onSaveEventHandler(){
    addNote(this.state);
    this.props.navigate('/');
  }

  render() {
    return (
      <section className="add-new-page">
        <div className="add-new-page__input">
          <input
            className="add-new-page__input__title"
            type="text"
            placeholder="Catatan rahasia"
            onChange={this.onTitleChangeHandler}
            value={this.state.title}
          />
          <div
            className="add-new-page__input__body"
            data-placeholder="Sebenarnya saya adalah"
            contentEditable
            onInput={this.onInputHandler}
            value={this.state.body}
          ></div>
          <SaveButton onSave={this.onSaveEventHandler} />
        </div>
      </section>
    );
  }
}

export default AddPageWrapper;
