import React, { useState } from "react";
import { useFormContext } from 'react-hook-form';

function RegistrationFormStep2() {

    const methods = useFormContext();
    
    return (
        <div className="form-container-2">
            <pre>{JSON.stringify(methods.getValues(), undefined, 2)}</pre>
            <h1 className="form-container">Registration Form Step 2:</h1>
            <p>The following attestations are required. Please ackowledge the following content to continue.</p>
            <p>"I attest that I am either a Winter 2023 student incidental fee-paying student or a non-fee paying student and will pay the $40 membership fee.
                At this time we are students only. Please initial below."

            </p>
            <input 
                {...methods.register('semesterDisclosure', {required: true})}
                name="semesterDisclosure"
                placeholder="Your Initials"
                type="text" 
            />
            <br />
            <p>Please Check the Boxes to ackowledge the following statements: </p>
            <p>
                "GENERAL POLICIES: Orientations are required to gain access to each individual studio, 
                they are valid for one academic year provided the member has consecutive term membership. 
                Members may exchange past term membership cards for current term cards as proof of orientation.  
                We are an adult facility. Youths 16+ may apply for membership but must meet criteria 
                (information is available at front desk). Minors interested in participating in a class or 
                workshop must also be approved by instructor. All clay must be purchased from the Craft Center. 
                No used/reclaimed wood in wood studio. Members will respect the Center's hours of operation by 
                concluding work, returning all tools and leaving a clean work area by closing time. 
                A more detailed listing of policies available at the front desk. "
            <input 
                {...methods.register('policiesDisclosure', {required: true})}
                name="policiesDisclosure"
                type="checkbox" 
            />
            </p>
            <p>
                "PERSONAL INJURY POLICY: I will report all personal injuries, equipment malfunctions or damage 
                to the front desk staff or an instructor, if they occur during class time."
            <input 
                {...methods.register('injuryDisclosure', {required: true})}
                name="injuryDisclosure"
                type="checkbox" 
            />
            </p>
            <p>
                "MACHINE/TOOL POLICY: I will not operate any machinery or tools that I have not received 
                professional training on."
            <input 
                {...methods.register('machineDisclosure', {required: true})}
                name="machineDisclosure"
                type="checkbox" 
            />
            </p>
            <p>
                "PHOTO POLICY: I give permission for the Craft Center to use photos & videos taken in the 
                studios & during events."
            <input 
                {...methods.register('photoDisclosure', {required: true})}
                name="photoDisclosure"
                type="checkbox" 
            />
            </p>
            <p>
                "REFUND POLICY: If you wish to withdraw from a class or workshop, Note: Full refunds will 
                only be given 2 day prior to the first class; after which, all fees are non-refundable 
                unless there are extenuating circumstances. "
            <input 
                {...methods.register('refundDisclosure', {required: true})}
                name="refundDisclosure"
                type="checkbox" 
            />
            </p>
            <p>
                "CANCELLATION POLICY: The Craft Center may cancel a class with insufficient enrollment. 
                You will be notified if a cancellation occurs and promptly offered a refund or credit."
            <input 
                {...methods.register('cancellationDisclosure', {required: true})}
                name="cancellationDisclosure"
                type="checkbox" 
            />
            </p>
            <p>
                "LOCKER RENTAL: The Craft Center is not responsible for the theft or loss and/or damage 
                to locker contents, whether in lockers or abandoned. Please renew locker rental and 
                membership by 4 p.m. on the last day of Dead Week. All items left in un-renewed lockers 
                are considered abandoned and require a $5.00 retrieval fee. After one term the contents 
                become the property of the Craft Center, and will not be available. ALL CLAY LEFT IN 
                LOCKERS AFTER THE END OF THE TERM WILL BE RECYCLED."
            <input 
                {...methods.register('lockerDisclosure', {required: true})}
                name="lockerDisclosure"
                type="checkbox" 
            />
            </p>
            <p>
                "LIABILITY WAIVER: The Craft Center provides access to tools and equipment that may 
                cause personal bodily injury. To reduce the possibility of injury or damages, the Craft 
                Center offers classes with instruction in tool and equipment use. In addition, studio 
                orientations are mandatory for all Craft Center users. The Craft Center does not provide 
                insurance to its users. Members must accept full responsibility for their actions, 
                including reimbursing others for damages to them or their property. Members are responsible 
                to replace tools or equipment damaged by their misuse. Memberships may be revoked with no 
                refund for dangerous actions or inappropriate conduct."
            <input 
                {...methods.register('liabilityDisclosure', {required: true})}
                name="liabilityDisclosure"
                type="checkbox" 
            />
            </p>
            <p>
                "ACCESSIBILITY: It is the policy at OSU to comply with the Rehabilitation Act and the ADA 
                that no qualified person shall, solely by reason of disability, be denied access to, 
                participation in, or the benefits of, any program or activity operated by the University. 
                Each qualified person shall receive the reasonable accommodations needed to ensure equal 
                access to employment, educational opportunities, programs, and activities in the most 
                integrated setting feasible. Accommodation requests related to a disability should be made 
                by prior to a scheduled class, workshop or event to one or both: Craft Center Director 
                541-737-6371, susan.bourque@oregonstate.edu or Asst. Director 541-737-2936, 
                angela.purviance@oregonstate.edu"
            <input 
                {...methods.register('accessibilityDisclosure', {required: true})}
                name="accessibilityDisclosure"
                type="checkbox" 
            />
            </p>                      
        </div>
        )
}

export default RegistrationFormStep2;
