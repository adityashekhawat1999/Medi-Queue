import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setRegistrationComplete } from '../store/patientSlice';

const PatientRegistration = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const registrationState = useSelector(state => state.patient);
    const { registrationComplete, currentTokenNumber, estimatedWaitTime, currentDepartment } = registrationState;
    
    // UI state
    const [painVal, setPainVal] = useState(5);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = (data) => {
        setIsSubmitting(true);
        // Simulate a network delay for registration
        setTimeout(() => {
            dispatch(setRegistrationComplete({ token: 'T-104', wait: 45 }));
            setIsSubmitting(false);
        }, 1200);
    };

    return (
        <div className="px-4 max-w-[420px] mx-auto min-h-screen flex flex-col gap-6">
            {!registrationComplete ? (
               <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 pb-24">
                   {/* Progress Indicator */}
                   <div className="flex gap-2 items-center px-2">
                       <div className="h-1.5 flex-1 bg-primary rounded-full"></div>
                       <div className="h-1.5 flex-1 bg-surface-container-highest rounded-full"></div>
                       <div className="h-1.5 flex-1 bg-surface-container-highest rounded-full"></div>
                   </div>

                   {/* Section: Step 1 Basic Info */}
                   <section className="flex flex-col gap-6">
                       <div className="px-2">
                           <h1 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight">Patient Details</h1>
                           <p className="text-on-surface-variant text-sm mt-1">Provide basic information to get started.</p>
                       </div>
                       
                       <div className="bg-surface-container-lowest rounded-xl p-6 flex flex-col gap-5">
                           {/* Field: Name */}
                           <div className="space-y-1.5">
                               <label className="block text-sm font-semibold text-on-surface-variant">
                                   Full Name / <span className="text-primary">पूरा नाम</span>
                               </label>
                               <input 
                                   className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-on-surface" 
                                   placeholder="e.g. Rahul Sharma" 
                                   type="text"
                                   {...register("fullName", { required: true })}
                               />
                               {errors.fullName && <p className="text-error text-xs">Name is required.</p>}
                           </div>

                           {/* Row: Age & Gender */}
                           <div className="grid grid-cols-2 gap-4">
                               <div className="space-y-1.5">
                                   <label className="block text-sm font-semibold text-on-surface-variant">
                                       Age / <span className="text-primary">उम्र</span>
                                   </label>
                                   <input 
                                       className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 outline-none text-on-surface" 
                                       placeholder="Years" 
                                       type="number"
                                       {...register("age", { required: true })}
                                   />
                               </div>

                               <div className="space-y-1.5">
                                   <label className="block text-sm font-semibold text-on-surface-variant">
                                       Gender / <span className="text-primary">लिंग</span>
                                   </label>
                                   <select 
                                       className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 outline-none text-on-surface appearance-none"
                                       {...register("gender")}
                                   >
                                       <option value="male">Male</option>
                                       <option value="female">Female</option>
                                       <option value="other">Other</option>
                                   </select>
                               </div>
                           </div>

                           {/* Field: Phone */}
                           <div className="space-y-1.5">
                               <label className="block text-sm font-semibold text-on-surface-variant">
                                   Phone Number / <span className="text-primary">फ़ोन नंबर</span>
                               </label>
                               <div className="relative">
                                   <span className="absolute left-4 top-4 text-on-surface-variant font-medium">+91</span>
                                   <input 
                                       className="w-full bg-surface-container-low border-none rounded-lg p-4 pl-12 focus:ring-2 focus:ring-primary/20 outline-none text-on-surface" 
                                       placeholder="00000 00000" 
                                       type="tel"
                                       {...register("phone", { required: true })}
                                   />
                               </div>
                           </div>
                       </div>
                   </section>

                   {/* Section: Step 2 AI Triage */}
                   <section className="flex flex-col gap-6">
                       <div className="px-2">
                           <div className="flex items-center gap-2">
                               <h2 className="font-headline text-2xl font-bold text-on-surface">Symptom Triage</h2>
                               <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">AI Powered</span>
                           </div>
                           <p className="text-on-surface-variant text-sm mt-1">How are you feeling today?</p>
                       </div>

                       <div className="bg-surface-container-lowest rounded-[1rem] p-6 flex flex-col gap-8">
                           {/* Question: Pain Scale */}
                           <div className="space-y-4">
                               <div className="flex justify-between items-end">
                                   <label className="text-sm font-bold text-on-surface leading-tight">
                                       Rate your pain level<br/>
                                       <span className="text-primary font-normal">अपने दर्द के स्तर को रेट करें</span>
                                   </label>
                                   <span className="text-3xl font-black text-primary" id="pain-val">{painVal}</span>
                               </div>
                               <input 
                                   className="w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary" 
                                   max="10" min="1" type="range" 
                                   {...register("painScale")}
                                   value={painVal}
                                   onChange={(e) => setPainVal(e.target.value)}
                               />
                               <div className="flex justify-between text-[10px] font-bold text-on-surface-variant px-1 uppercase tracking-tighter">
                                   <span>Mild</span>
                                   <span>Moderate</span>
                                   <span>Severe</span>
                               </div>
                           </div>

                           {/* Question: Fever */}
                           <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg">
                               <div className="flex flex-col">
                                   <span className="text-sm font-bold">High Fever?</span>
                                   <span className="text-xs text-primary">तेज बुखार?</span>
                               </div>
                               <div className="flex gap-2">
                                   <label className="cursor-pointer">
                                       <input type="radio" value="no" {...register("fever")} className="peer sr-only"/>
                                       <div className="px-4 py-2 bg-surface-container-highest peer-checked:bg-primary peer-checked:text-white rounded-md text-xs font-bold transition-all active:scale-95">NO</div>
                                   </label>
                                   <label className="cursor-pointer">
                                       <input type="radio" value="yes" {...register("fever")} className="peer sr-only"/>
                                       <div className="px-4 py-2 bg-surface-container-highest peer-checked:bg-primary peer-checked:text-white rounded-md text-xs font-bold transition-all active:scale-95">YES</div>
                                   </label>
                               </div>
                           </div>

                           {/* Question: Breathing */}
                           <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg">
                               <div className="flex flex-col">
                                   <span className="text-sm font-bold">Difficulty breathing?</span>
                                   <span className="text-xs text-primary">सांस लेने में कठिनाई?</span>
                               </div>
                               <div className="flex gap-2">
                                   <label className="cursor-pointer">
                                       <input type="radio" value="no" {...register("breathing")} className="peer sr-only"/>
                                       <div className="px-4 py-2 bg-surface-container-highest peer-checked:bg-primary peer-checked:text-white rounded-md text-xs font-bold transition-all active:scale-95">NO</div>
                                   </label>
                                   <label className="cursor-pointer">
                                       <input type="radio" value="yes" {...register("breathing")} className="peer sr-only"/>
                                       <div className="px-4 py-2 bg-surface-container-highest peer-checked:bg-primary peer-checked:text-white rounded-md text-xs font-bold transition-all active:scale-95">YES</div>
                                   </label>
                               </div>
                           </div>
                       </div>
                   </section>

                   {/* Global Submit (Main Action) */}
                   <div className="fixed bottom-0 left-0 w-full p-4 bg-surface/80 backdrop-blur-md flex justify-center z-40">
                       <div className="max-w-[420px] w-full">
                           <button 
                               type="submit"
                               disabled={isSubmitting}
                               className="w-full bg-gradient-to-br from-primary to-primary-container text-white py-5 rounded-2xl font-bold text-lg shadow-[0_4px_12px_rgba(0,152,242,0.3)] flex items-center justify-center gap-3 active:scale-95 transition-transform disabled:opacity-50"
                           >
                               <span>{isSubmitting ? 'Submitting...' : 'Submit Registration / जमा करें'}</span>
                           </button>
                       </div>
                   </div>
               </form>
            ) : (
                <section className="flex flex-col gap-6 mt-12 pt-12 border-t-2 border-dashed border-outline-variant/30">
                    <div className="bg-primary p-1 rounded-2xl shadow-xl shadow-primary/20">
                        <div className="bg-surface-container-lowest rounded-[calc(1rem-2px)] p-8 text-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#00629f_1.5px,transparent_1.5px)] [background-size:20px_20px]"></div>
                            
                            <div className="relative z-10">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-tertiary-container text-on-tertiary-container rounded-full mb-4">
                                    <span className="material-symbols-outlined text-4xl" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                                </div>
                                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Registration Complete</p>
                                
                                <h3 className="text-5xl font-black text-primary font-headline mb-4">{currentTokenNumber}</h3>
                                
                                <div className="flex flex-col gap-1 mb-8">
                                    <p className="text-lg font-bold text-on-surface">{currentDepartment}</p>
                                    <div className="flex items-center justify-center gap-2 text-on-surface-variant">
                                        <span className="material-symbols-outlined text-sm">schedule</span>
                                        <span className="text-sm font-medium">Est. Wait: <span className="text-primary font-bold">{estimatedWaitTime} mins</span></span>
                                    </div>
                                </div>
                                
                                <button 
                                  onClick={() => navigate('/status')}
                                  className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all hover:brightness-110 active:scale-95 shadow-lg shadow-primary/30"
                                >
                                    View live queue status
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default PatientRegistration;
