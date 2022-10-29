import React, { useCallback, useState } from "react";
import HeavyButton from "./HeavyButton";

export default function NewsletterSignupForm() {
  const [inputValue, setInputValue] = useState("");

  function onClickSignupButton() {
    console.log("you clicked the sign up button");
  }
  const memoizedSignUpButton = useCallback(()=>{
    onClickSignupButton()
  },[])

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        type="email"
        value={inputValue}
      />
      <HeavyButton onClick={memoizedSignUpButton}>Submit</HeavyButton>
    </form>
  );
}
