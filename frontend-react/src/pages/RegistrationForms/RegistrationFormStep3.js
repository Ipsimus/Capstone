import React, { useState } from "react";
import { useFormContext } from 'react-hook-form';

function RegistrationFormStep3() {

    const methods = useFormContext();
    
    return (
        <div className="form-container-3">
            <pre>{JSON.stringify(methods.getValues(), undefined, 2)}</pre>
            <h1 className="form-container">Registration Form Step 3:</h1>
            <p>
                Check the box if you have been a member with us in the past. 
            <input 
                {...methods.register('pastMemberQuestion', {required: false})}
                name="pastMemberQuestion"
                type="checkbox" 
            />
            </p>
            <br />
            <p>
                What activities are you most interested in?
            </p>
            <p>
                Ceramics
            <input 
                {...methods.register('activityCeramics', {required: true})}
                name="activityCeramics"
                type="checkbox" 
            />
            </p>
            <p>
                Wood Working
            <input 
                {...methods.register('activityWoodWorking', {required: true})}
                name="activityWoodWorking"
                type="checkbox" 
            />
            </p>
            <p>
                Glass Art
            <input 
                {...methods.register('activityGlassArt', {required: true})}
                name="activityGlassArt"
                type="checkbox" 
            />
            </p>
            <p>
                Fabric Art
            <input 
                {...methods.register('activityFabricArt', {required: true})}
                name="activityFabricArt"
                type="checkbox" 
            />
            </p>
            <p>
                Paper Art
            <input 
                {...methods.register('activityPaperArt', {required: true})}
                name="activityPaperArt"
                type="checkbox" 
            />
            </p>
            <p>
                Painting
            <input 
                {...methods.register('activityPainting', {required: true})}
                name="activityPainting"
                type="checkbox" 
            />
            </p>
            <br />
            <p>
                How did you hear about us? Please check one.
            </p>
            <p>
                Friend
            <input 
                {...methods.register('advertFriend', {required: true})}
                name="advertFriend"
                type="checkbox" 
            />
            </p>
            <p>
                Staff
            <input 
                {...methods.register('advertStaff', {required: true})}
                name="advertStaff"
                type="checkbox" 
            />
            </p> 
            <p>
                Event   
            <input 
                {...methods.register('advertEvent', {required: true})}
                name="advertEvent"
                type="checkbox" 
            />
            </p>
            <p>
                Ad        
            <input 
                {...methods.register('advertAd', {required: true})}
                name="advertAd"
                type="checkbox" 
            />
            </p>
            <p>
                I have read, understand, and accept the terms of this agreement. (Type your name below to consent.)
            </p>    
            <input 
                {...methods.register('signature', {required: true})}
                name="signature"
                placeholder="Your Name"
                type="text" 
            />
            <br />        
        </div>
    )
}

export default RegistrationFormStep3;
