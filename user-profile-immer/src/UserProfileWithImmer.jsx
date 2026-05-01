
 
 import {useImmer} from "use-immer"

 export default function UserProfileWithImmer () {
  const [userProfile , setUserProfile] = useImmer({
 
 
     name: "",
     email: "",
     contactDetails: {
     phone: "",
     address: "",
     },
 
     preferences: {
     newsletter: false,
     notifications: false,
 
      },
 
  });

  const updateName = (value) => {
 
    setUserProfile(draft => { 
      draft.name = value;
 
 
    });
  }; 


  
  const updateEmail = (value) => {
 
    setUserProfile(draft => { 
      draft.email= value;
 
 
    });
  }; 


   

 
     
  const updatePhone = (value) => {
 
    setUserProfile(draft => {
       draft.contactDetails.phone = value;
 
 
    });
  };
 
  const updateAddress = (value) => {
 
     setUserProfile(draft => { 
      draft.contactDetails.address = value;
  
     });
   };
  
 
 
   const toggleNewsletter = () => {
 
     setUserProfile(draft => {
  
      draft.preferences.newsletter = !draft.preferences.newsletter;
  
  
     });
   };
     
     const toggleNotifications = () => {
 
     setUserProfile(draft => {
  
      draft.preferences.notifications = !draft.preferences.notifications;
  
  
     });
   };
 
 
    return (
 
     <div className="container">
 
         

         
         <input
          placeholder="Name"
          value={userProfile.name}
          onChange={(e) => updateName (e.target.value)}
          />



        <input
          placeholder="Email"
          value={userProfile.email}
          onChange={(e) => updateEmail (e.target.value)}
          />


        <input
          placeholder="Phone"
          value={userProfile.contactDetails.phone}
          onChange={(e) => updatePhone (e.target.value)}
          />


            <input
          placeholder="Address"
          value={userProfile.contactDetails.address}
          onChange={(e) => updateAddress (e.target.value)}
          />


          <div className="toggles">


         <label>
         <input
         type="checkbox"
         checked={userProfile.preferences.newsletter} 
         onClick={toggleNewsletter}
         />
         Toggle Newsletter
         </label>

         <label>
         <input
         type="checkbox"
         checked={userProfile.preferences.notifications}
         onClick={toggleNotifications}
           />
           Toggle Notifications
           </label>
         </div>

         <pre>{JSON.stringify(userProfile, null, 2)}</pre>
 
     </div>
 
 
    );
 
 
 }
 
 