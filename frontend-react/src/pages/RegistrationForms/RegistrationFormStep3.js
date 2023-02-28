import React, { useState } from "react";
import { useFormContext } from 'react-hook-form';

function RegistrationFormStep3() {

    const methods = useFormContext();
    
    return (
        <div className="form-container">
            <pre>{JSON.stringify(methods.getValues(), undefined, 2)}</pre>
            <h1>Registration Form Step 3:</h1>
            <p>
                "Have you been an OSU Craft Center Member in the past?"
            </p>
            <input 
                {...methods.register('pastMemberQuestion', {required: false})}
                name="pastMemberQuestion"
                type="checkbox" 
            />
            <br />
            <p>
                "What activities are you most interested in?"
            </p>
            <input 
                {...methods.register('activityCeramics', {required: true})}
                name="activityCeramics"
                type="checkbox" 
            />
            <br />
            <input 
                {...methods.register('activityWoodWorking', {required: true})}
                name="activityWoodWorking"
                type="checkbox" 
            />
            <br />
            <input 
                {...methods.register('activityGlassArt', {required: true})}
                name="activityGlassArt"
                type="checkbox" 
            />
            <br />
            <input 
                {...methods.register('activityFabricArt', {required: true})}
                name="activityFabricArt"
                type="checkbox" 
            />
            <br />
            <input 
                {...methods.register('activityPaperArt', {required: true})}
                name="activityPaperArt"
                type="checkbox" 
            />
            <br />
            <input 
                {...methods.register('activityPainting', {required: true})}
                name="activityPainting"
                type="checkbox" 
            />
            <br />
            <p>
                "How did you hear about us?"
            </p>
            <input 
                {...methods.register('advertFriend', {required: true})}
                name="advertFriend"
                type="checkbox" 
            />
            <br />
            <input 
                {...methods.register('advertStaff', {required: true})}
                name="advertStaff"
                type="checkbox" 
            />
            <br />        
            <input 
                {...methods.register('advertEvent', {required: true})}
                name="advertEvent"
                type="checkbox" 
            />
            <br />        
            <input 
                {...methods.register('advertAd', {required: true})}
                name="advertAd"
                type="checkbox" 
            />
            <br />
            <p>
                "I have read, understand, and accept the terms of this agreement. (Text signiture below)"
            </p>    
            <input 
                {...methods.register('signature', {required: true})}
                name="signature"
                type="text" 
            />
            <br />        
        </div>
    )
}

export default RegistrationFormStep3;
