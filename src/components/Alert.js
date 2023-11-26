import React from "react";

export default function Alert(props) {
  let Capitalize = (word)=>{
    let lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    props.alert && <div>
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      ><strong>{Capitalize(props.alert.type)}</strong>&nbsp;{props.alert.msg}
      </div>
    </div>
  );
}
