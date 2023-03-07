import React, { useState } from "react";
import { useFormContext } from 'react-hook-form';

function RegistrationFormStep3() {

    const methods = useFormContext();
    
    return (
        <div className="form-container-3">
            <pre>{JSON.stringify(methods.getValues(), undefined, 2)}</pre>
            <h2 className="form-container">Interests & Sign Off</h2>
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
                {...methods.register('activityCeramics', {required: false})}
                name="activityCeramics"
                type="checkbox" 
            />
            </p>
            <p>
                Wood Working
            <input 
                {...methods.register('activityWoodWorking', {required: false})}
                name="activityWoodWorking"
                type="checkbox" 
            />
            </p>
            <p>
                Glass Art
            <input 
                {...methods.register('activityGlassArt', {required: false})}
                name="activityGlassArt"
                type="checkbox" 
            />
            </p>
            <p>
                Fabric Art
            <input 
                {...methods.register('activityFabricArt', {required: false})}
                name="activityFabricArt"
                type="checkbox" 
            />
            </p>
            <p>
                Paper Art
            <input 
                {...methods.register('activityPaperArt', {required: false})}
                name="activityPaperArt"
                type="checkbox" 
            />
            </p>
            <p>
                Painting
            <input 
                {...methods.register('activityPainting', {required: false})}
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
                {...methods.register('advertFriend', {required: false})}
                name="advertFriend"
                type="checkbox" 
            />
            </p>
            <p>
                Staff
            <input 
                {...methods.register('advertStaff', {required: false})}
                name="advertStaff"
                type="checkbox" 
            />
            </p> 
            <p>
                Event   
            <input 
                {...methods.register('advertEvent', {required: false})}
                name="advertEvent"
                type="checkbox" 
            />
            </p>
            <p>
                Ad        
            <input 
                {...methods.register('advertAd', {required: false})}
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
