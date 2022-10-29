import { useEffect, useState } from "react";
import NewsletterSignupForm from "../components/NewsletterSignupForm";
import UsersList from "../components/UsersList";

export default function IndexPage() {
  const [showNewsletterWidget,setShowNewsletterWidget] =useState(false)
  useEffect(()=>{
    setTimeout(()=>{
      setShowNewsletterWidget(true)
    },10000)
  },[])

  return (
    <>
      <UsersList />

      {showNewsletterWidget && (
        <div>
          <h2>Join Our Newletter</h2>
          <NewsletterSignupForm />
        </div>
      )}
    </>
  );
}
