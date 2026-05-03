# MediQueue – Smart Hospital Queue Management System

## Overview
MediQueue is a dual-portal web application designed to streamline outpatient department (OPD) operations in public hospitals. It replaces manual token systems with a real-time digital queue, AI-powered symptom triage, and a centralized dashboard for doctors and administrators.

The system is built as a lightweight, deployable solution requiring no additional hardware beyond a QR code, making it practical for large-scale adoption in resource-constrained environments.

## Problem Statement
Public hospitals in India face significant operational challenges:
•⁠  ⁠Long and unpredictable waiting times with no queue visibility  
•⁠  ⁠Patients frequently visiting incorrect departments  
•⁠  ⁠Lack of prioritization for urgent or critical cases  
•⁠  ⁠Overcrowded waiting areas  
•⁠  ⁠Minimal data available for administrative decision-making  

These inefficiencies lead to poor patient experience and reduced healthcare accessibility.

## Solution
MediQueue addresses these issues through three integrated components:
1.⁠ ⁠*Patient Interface* – Digital token registration and real-time queue tracking  
2.⁠ ⁠*AI Triage System* – Symptom-based classification and department routing  
3.⁠ ⁠*Doctor/Admin Dashboard* – Queue management, prioritization, and analytics  

## Core Features
•⁠  ⁠Digital token generation with estimated wait time  
•⁠  ⁠Real-time queue updates accessible from any device  
•⁠  ⁠AI-based triage (routine, priority, emergency)  
•⁠  ⁠Automated department assignment  
•⁠  ⁠Doctor dashboard with actions: call, skip, complete  
•⁠  ⁠Emergency case prioritization and alerts  
•⁠  ⁠SMS/notification system for patient updates  
•⁠  ⁠Administrative dashboard with daily analytics and reports  

## System Workflow
1.⁠ ⁠Patient accesses the system via QR code or URL  
2.⁠ ⁠Enters basic details and completes symptom form  
3.⁠ ⁠AI classifies urgency and assigns department  
4.⁠ ⁠Token is generated with live queue position and ETA  
5.⁠ ⁠Doctor manages queue through dashboard actions  
6.⁠ ⁠Patient receives notifications as their turn approaches  

## Tech Stack
•⁠  ⁠*Frontend:* Next.js, TailwindCSS  
•⁠  ⁠*Backend:* Node.js (Next.js API routes)  
•⁠  ⁠*Database:* PostgreSQL (Supabase)  
•⁠  ⁠*AI Integration:* OpenAI API  
•⁠  ⁠*Notifications:* Twilio SMS  
•⁠  ⁠*Deployment:* Vercel and Supabase  

## Target Users
•⁠  ⁠*Patients:* Individuals visiting public hospital OPDs seeking clarity on wait times and correct departments  
•⁠  ⁠*Doctors/Receptionists:* Staff managing patient queues within departments  
•⁠  ⁠*Administrators:* Hospital authorities monitoring operations and performance metrics  

## Impact
•⁠  ⁠Reduces perceived and actual waiting time  
•⁠  ⁠Minimizes overcrowding in hospital waiting areas  
•⁠  ⁠Improves accuracy of department routing  
•⁠  ⁠Enables prioritization of urgent cases  
•⁠  ⁠Provides actionable data for hospital management  

## Scope

### In Scope (MVP)
•⁠  ⁠Patient registration and token issuance  
•⁠  ⁠AI-based symptom triage and routing  
•⁠  ⁠Live queue tracking  
•⁠  ⁠Doctor dashboard for queue operations  
•⁠  ⁠Admin analytics and reporting  
•⁠  ⁠Notification system  

### Out of Scope
•⁠  ⁠Electronic medical record (EMR) integration  
•⁠  ⁠Payment or insurance processing  
•⁠  ⁠Native mobile applications  
•⁠  ⁠Multi-hospital deployment  

## Future Enhancements
•⁠  ⁠AI-based wait time prediction  
•⁠  ⁠Multi-hospital scalability  
•⁠  ⁠Integration with hospital information systems  
•⁠  ⁠Mobile application support  
