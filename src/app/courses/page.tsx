'use client'
import SectionHeader from "@/partials/SectionHeader";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Courses = () => {

    const [activeTab, setActiveTab] = useState<number | null>(null);

    const handleTabClick = (index: number) => {
        document.getElementById('courseDetails')?.scrollIntoView(true);
        setActiveTab(index === activeTab ? null : index);
    };

    const courses=[{
        "Heading":"Pre-recorded Lectures on SMM",
        "Description":"Lorem first ipsum first dolor sit amet first pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.",
        "CourseImg":"https://res.cloudinary.com/dncar4d7j/image/upload/v1715505846/coursesTrainings_xv2xxs.webp",
        "IsAvailable":"false",
        "OriginalPrice":"1,999",
        "FinalPrice":"999",
        "FeatureOne":"Recorder Classes",
        "FeatureTwo":"1 month total",
        "Discount":"50%",
        "CourseContent":["Managing a Brand", "Market Research", "Competitive Analysis", "Strategy Development", "Content Calendar Strategies", "Basics of Content Creation", "Introduction to Canva", "Community Management", "Trend Analysis", "Facebook and LinkedIn Ads", "Analytics and Reporting", "Starting a Career as a Freelancer", "Introduction to AI in SMM"]
    },{
        "Heading":"Introduction to Social Media Management",
        "Description":"Lorem second ipsum second dolor sit amet second pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.",
        "CourseImg":"https://res.cloudinary.com/dncar4d7j/image/upload/v1715505846/coursesTrainings_xv2xxs.webp",
        "IsAvailable":"true",
        "OriginalPrice":"9,999",
        "FinalPrice":"4,999",
        "FeatureOne":"Live Classes",
        "FeatureTwo":"3 months total",
        "Discount":"50%",
        "FormLink":"#tally-open=w24Zyp&tally-emoji-text=👋&tally-emoji-animation=wave&tally-auto-close=1000",
        "CourseContent":["Managing a Brand", "Market Research", "Competitive Analysis", "Strategy Development", "Content Calendar Strategies", "Basics of Content Creation", "Introduction to Canva", "Community Management", "Trend Analysis", "Facebook and LinkedIn Ads", "Analytics and Reporting", "Starting a Career as a Freelancer", "Introduction to AI in SMM"]
    },{
        "Heading":"Digital Marketing Course For Corporates",
        "Description":"Lorem third ipsum third dolor sit amet third pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.",
        "CourseImg":"https://res.cloudinary.com/dncar4d7j/image/upload/v1715505846/coursesTrainings_xv2xxs.webp",
        "IsAvailable":"true",
        "OriginalPrice":"XX,999",
        "FinalPrice":"X,999",
        "FeatureOne":"Live Classes",
        "FeatureTwo":"1.5 months total",
        "Discount":"50%",
        "FormLink":"#tally-open=nGrgNe&tally-emoji-text=👋&tally-emoji-animation=wave&tally-auto-close=1000",
        "CourseContent":["Managing a Brand", "Market Research", "Competitive Analysis", "Strategy Development", "Content Calendar Strategies", "Basics of Content Creation", "Introduction to Canva", "Community Management", "Trend Analysis", "Facebook and LinkedIn Ads", "Analytics and Reporting", "Starting a Career as a Freelancer", "Introduction to AI in SMM"]
    }];

    return ( 
        <>
        {/* colors: yellow: #FBDC6D, Blue: #1B1E49, Red: #D02727 */}

        <section className="bg-[#1B1E49] pt-20 pb-10 lg:pt-[30px] lg:pb-20 overflow-hidden">
        <SectionHeader primaryText="EXPLORE OUR COURSES" secondaryText="What We Offer" bgColor="bg-[#1B1E49]" textColor="text-[#8e92d5]"/>
            <div className="container mx-auto lg:pt-12">
                <div className="flex flex-wrap -mx-4">
                    {courses.map((course, index)=>(
                        <div key={index} className="w-full px-4 md:w-1/2 xl:w-1/3 mb-4">
                            <div className="border border-[#1B1E49] rounded-md bg-[#FBDC6D]">
                                <div className="w-full aspect-[16/9] rounded-t-md"
                                style={{backgroundImage:`url(${course.CourseImg})`, backgroundSize:"cover"}}/>

                                <div className="border-b border-black mb-4 pb-4 pt-4">
                                    <p className="w-full flex gap-x-4 ml-4"> 
                                        <span className="border border-[#1B1E49] rounded-full text-red-500 px-4">{course.FeatureOne}</span>
                                        <span className="border border-[#1B1E49] rounded-full text-red-500 px-4">{course.FeatureTwo}</span>
                                    </p>
                                    <h1 className="text-lg mx-4 mt-3 text-[#1B1E49]">{course.Heading}</h1>
                                </div>

                                <div className="flex my-2 gap-x-4 ml-4">
                                    <div className="flex gap-x-2">
                                        <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.3375 17.5905C19.0531 17.6312 18.7687 17.7124 18.525 17.8749L17.3875 16.7374V19.053C17.3875 19.0937 17.3875 19.1343 17.3469 19.1749V19.2155C17.2656 19.378 17.1438 19.4999 16.9406 19.4999C16.7781 19.4999 16.6156 19.378 16.5344 19.2155V19.1749C16.5344 19.1343 16.4937 19.0937 16.4937 19.053V16.7374L15.3562 17.8749C15.1125 17.753 14.8281 17.6312 14.5437 17.5905C14.625 17.4687 14.7063 17.3468 14.7875 17.2249L16.4937 15.5187V12.8374H17.3469V15.5187L19.0531 17.2249C19.175 17.3468 19.2562 17.4687 19.3375 17.5905ZM22.5063 18.403H19.7437C18.8094 18.403 18.0781 19.1343 18.0781 20.0687V22.0999H24.2125V20.0687C24.1719 19.1749 23.4406 18.403 22.5063 18.403ZM21.125 14.7062C20.3531 14.7062 19.7031 15.3562 19.7031 16.128C19.7031 16.8999 20.3531 17.5499 21.125 17.5499C21.8969 17.5499 22.5469 16.8999 22.5469 16.128C22.5469 15.3155 21.8969 14.7062 21.125 14.7062ZM14.1781 18.403H11.4156C10.4813 18.403 9.75 19.1343 9.75 20.0687V22.0999H15.8438V20.0687C15.8438 19.1749 15.0719 18.403 14.1781 18.403ZM12.7969 14.7062C12.025 14.7062 11.375 15.3562 11.375 16.128C11.375 16.8999 12.025 17.5499 12.7969 17.5499C13.5687 17.5499 14.2188 16.8999 14.2188 16.128C14.2188 15.3155 13.5687 14.7062 12.7969 14.7062Z" fill="black"/>
                                            <path d="M25.35 0H16.9406H7.9625C7.6375 0 7.39375 0.24375 7.39375 0.56875C7.39375 0.89375 7.6375 1.1375 7.9625 1.1375H25.4312C25.5937 1.1375 25.7156 1.09687 25.8375 0.975C25.9594 0.853125 26 0.690625 26 0.528125C25.9594 0.24375 25.675 0 25.35 0ZM20.15 3.65625C18.525 3.65625 17.1844 4.99687 17.1844 6.62187C17.1844 8.24687 18.525 9.5875 20.15 9.5875C21.775 9.5875 23.1156 8.24687 23.1156 6.62187C23.1156 4.99687 21.775 3.65625 20.15 3.65625ZM22.0188 5.72812L20.8 6.6625L21.8969 7.75937C22.0594 7.92187 22.0594 8.20625 21.8969 8.36875C21.8156 8.45 21.6938 8.49063 21.6125 8.49063C21.4906 8.49063 21.4094 8.45 21.2875 8.36875L19.8656 6.94687C19.8656 6.94687 19.8656 6.90625 19.825 6.90625C19.825 6.90625 19.825 6.86563 19.7844 6.86563C19.7844 6.825 19.7437 6.825 19.7437 6.78438C19.7437 6.74375 19.7437 6.74375 19.7437 6.70312V6.6625V4.63125C19.7437 4.3875 19.9469 4.18438 20.1906 4.18438C20.4344 4.18438 20.6375 4.3875 20.6375 4.63125V5.80938L21.5719 5.11875C21.775 4.95625 22.0187 4.99688 22.1812 5.2C22.2625 5.32188 22.2219 5.56562 22.0188 5.72812ZM20.15 3.65625C18.525 3.65625 17.1844 4.99687 17.1844 6.62187C17.1844 8.24687 18.525 9.5875 20.15 9.5875C21.775 9.5875 23.1156 8.24687 23.1156 6.62187C23.1156 4.99687 21.775 3.65625 20.15 3.65625ZM22.0188 5.72812L20.8 6.6625L21.8969 7.75937C22.0594 7.92187 22.0594 8.20625 21.8969 8.36875C21.8156 8.45 21.6938 8.49063 21.6125 8.49063C21.4906 8.49063 21.4094 8.45 21.2875 8.36875L19.8656 6.94687C19.8656 6.94687 19.8656 6.90625 19.825 6.90625C19.825 6.90625 19.825 6.86563 19.7844 6.86563C19.7844 6.825 19.7437 6.825 19.7437 6.78438C19.7437 6.74375 19.7437 6.74375 19.7437 6.70312V6.6625V4.63125C19.7437 4.3875 19.9469 4.18438 20.1906 4.18438C20.4344 4.18438 20.6375 4.3875 20.6375 4.63125V5.80938L21.5719 5.11875C21.775 4.95625 22.0187 4.99688 22.1812 5.2C22.2625 5.32188 22.2219 5.56562 22.0188 5.72812ZM20.15 3.65625C18.525 3.65625 17.1844 4.99687 17.1844 6.62187C17.1844 8.24687 18.525 9.5875 20.15 9.5875C21.775 9.5875 23.1156 8.24687 23.1156 6.62187C23.1156 4.99687 21.775 3.65625 20.15 3.65625ZM22.0188 5.72812L20.8 6.6625L21.8969 7.75937C22.0594 7.92187 22.0594 8.20625 21.8969 8.36875C21.8156 8.45 21.6938 8.49063 21.6125 8.49063C21.4906 8.49063 21.4094 8.45 21.2875 8.36875L19.8656 6.94687C19.8656 6.94687 19.8656 6.90625 19.825 6.90625C19.825 6.90625 19.825 6.86563 19.7844 6.86563C19.7844 6.825 19.7437 6.825 19.7437 6.78438C19.7437 6.74375 19.7437 6.74375 19.7437 6.70312V6.6625V4.63125C19.7437 4.3875 19.9469 4.18438 20.1906 4.18438C20.4344 4.18438 20.6375 4.3875 20.6375 4.63125V5.80938L21.5719 5.11875C21.775 4.95625 22.0187 4.99688 22.1812 5.2C22.2625 5.32188 22.2219 5.56562 22.0188 5.72812ZM20.15 3.65625C18.525 3.65625 17.1844 4.99687 17.1844 6.62187C17.1844 8.24687 18.525 9.5875 20.15 9.5875C21.775 9.5875 23.1156 8.24687 23.1156 6.62187C23.1156 4.99687 21.775 3.65625 20.15 3.65625ZM22.0188 5.72812L20.8 6.6625L21.8969 7.75937C22.0594 7.92187 22.0594 8.20625 21.8969 8.36875C21.8156 8.45 21.6938 8.49063 21.6125 8.49063C21.4906 8.49063 21.4094 8.45 21.2875 8.36875L19.8656 6.94687C19.8656 6.94687 19.8656 6.90625 19.825 6.90625C19.825 6.90625 19.825 6.86563 19.7844 6.86563C19.7844 6.825 19.7437 6.825 19.7437 6.78438C19.7437 6.74375 19.7437 6.74375 19.7437 6.70312V6.6625V4.63125C19.7437 4.3875 19.9469 4.18438 20.1906 4.18438C20.4344 4.18438 20.6375 4.3875 20.6375 4.63125V5.80938L21.5719 5.11875C21.775 4.95625 22.0187 4.99688 22.1812 5.2C22.2625 5.32188 22.2219 5.56562 22.0188 5.72812ZM20.15 3.65625C18.525 3.65625 17.1844 4.99687 17.1844 6.62187C17.1844 8.24687 18.525 9.5875 20.15 9.5875C21.775 9.5875 23.1156 8.24687 23.1156 6.62187C23.1156 4.99687 21.775 3.65625 20.15 3.65625ZM22.0188 5.72812L20.8 6.6625L21.8969 7.75937C22.0594 7.92187 22.0594 8.20625 21.8969 8.36875C21.8156 8.45 21.6938 8.49063 21.6125 8.49063C21.4906 8.49063 21.4094 8.45 21.2875 8.36875L19.8656 6.94687C19.8656 6.94687 19.8656 6.90625 19.825 6.90625C19.825 6.90625 19.825 6.86563 19.7844 6.86563C19.7844 6.825 19.7437 6.825 19.7437 6.78438C19.7437 6.74375 19.7437 6.74375 19.7437 6.70312V6.6625V4.63125C19.7437 4.3875 19.9469 4.18438 20.1906 4.18438C20.4344 4.18438 20.6375 4.3875 20.6375 4.63125V5.80938L21.5719 5.11875C21.775 4.95625 22.0187 4.99688 22.1812 5.2C22.2625 5.32188 22.2219 5.56562 22.0188 5.72812ZM20.15 3.65625C18.525 3.65625 17.1844 4.99687 17.1844 6.62187C17.1844 8.24687 18.525 9.5875 20.15 9.5875C21.775 9.5875 23.1156 8.24687 23.1156 6.62187C23.1156 4.99687 21.775 3.65625 20.15 3.65625ZM22.0188 5.72812L20.8 6.6625L21.8969 7.75937C22.0594 7.92187 22.0594 8.20625 21.8969 8.36875C21.8156 8.45 21.6938 8.49063 21.6125 8.49063C21.4906 8.49063 21.4094 8.45 21.2875 8.36875L19.8656 6.94687C19.8656 6.94687 19.8656 6.90625 19.825 6.90625C19.825 6.90625 19.825 6.86563 19.7844 6.86563C19.7844 6.825 19.7437 6.825 19.7437 6.78438C19.7437 6.74375 19.7437 6.74375 19.7437 6.70312V6.6625V4.63125C19.7437 4.3875 19.9469 4.18438 20.1906 4.18438C20.4344 4.18438 20.6375 4.3875 20.6375 4.63125V5.80938L21.5719 5.11875C21.775 4.95625 22.0187 4.99688 22.1812 5.2C22.2625 5.32188 22.2219 5.56562 22.0188 5.72812ZM9.1 1.99062V6.37812C9.46562 6.9875 9.70937 7.71875 9.70937 8.53125V12.2281H23.8469C24.3344 12.2281 24.7812 11.8219 24.7812 11.2937V1.99062H9.1ZM14.3813 6.9875C14.3813 6.74375 14.5844 6.54062 14.8281 6.54062C15.0719 6.54062 15.275 6.74375 15.275 6.9875V9.79062C15.275 10.0344 15.0719 10.2375 14.8281 10.2375C14.5844 10.2375 14.3813 10.0344 14.3813 9.79062V6.9875ZM13.325 8.45C13.325 8.20625 13.5281 8.00313 13.7719 8.00313C14.0156 8.00313 14.2188 8.20625 14.2188 8.45V9.83125C14.2188 10.075 14.0156 10.2781 13.7719 10.2781C13.5281 10.2781 13.325 10.075 13.325 9.83125V8.45ZM12.2281 7.92188C12.2281 7.67812 12.4313 7.475 12.675 7.475C12.9188 7.475 13.1219 7.67812 13.1219 7.92188V9.83125C13.1219 10.075 12.9188 10.2781 12.675 10.2781C12.4313 10.2781 12.2281 10.075 12.2281 9.83125V7.92188ZM11.1719 8.97812C11.1719 8.73437 11.375 8.53125 11.6188 8.53125C11.8625 8.53125 12.0656 8.73437 12.0656 8.97812V9.79062C12.0656 10.0344 11.8625 10.2375 11.6188 10.2375C11.375 10.2375 11.1719 10.0344 11.1719 9.79062V8.97812ZM15.4781 11.4563H10.8875C10.6437 11.4563 10.4406 11.2531 10.4406 11.0094C10.4406 10.7656 10.6437 10.5625 10.8875 10.5625H15.5188C15.7625 10.5625 15.9656 10.7656 15.9656 11.0094C15.925 11.2531 15.7219 11.4563 15.4781 11.4563ZM20.15 10.4406C18.0375 10.4406 16.3313 8.73437 16.3313 6.62187C16.3313 4.50937 18.0375 2.80312 20.15 2.80312C22.2625 2.80312 23.9688 4.50937 23.9688 6.62187C23.9688 8.73437 22.2625 10.4406 20.15 10.4406ZM20.15 3.65625C18.525 3.65625 17.1844 4.99687 17.1844 6.62187C17.1844 8.24687 18.525 9.5875 20.15 9.5875C21.775 9.5875 23.1156 8.24687 23.1156 6.62187C23.1156 4.99687 21.775 3.65625 20.15 3.65625ZM22.0188 5.72812L20.8 6.6625L21.8969 7.75937C22.0594 7.92187 22.0594 8.20625 21.8969 8.36875C21.8156 8.45 21.6938 8.49063 21.6125 8.49063C21.4906 8.49063 21.4094 8.45 21.2875 8.36875L19.8656 6.94687C19.8656 6.94687 19.8656 6.90625 19.825 6.90625C19.825 6.90625 19.825 6.86563 19.7844 6.86563C19.7844 6.825 19.7437 6.825 19.7437 6.78438C19.7437 6.74375 19.7437 6.74375 19.7437 6.70312V6.6625V4.63125C19.7437 4.3875 19.9469 4.18438 20.1906 4.18438C20.4344 4.18438 20.6375 4.3875 20.6375 4.63125V5.80938L21.5719 5.11875C21.775 4.95625 22.0187 4.99688 22.1812 5.2C22.2625 5.32188 22.2219 5.56562 22.0188 5.72812ZM20.15 3.65625C18.525 3.65625 17.1844 4.99687 17.1844 6.62187C17.1844 8.24687 18.525 9.5875 20.15 9.5875C21.775 9.5875 23.1156 8.24687 23.1156 6.62187C23.1156 4.99687 21.775 3.65625 20.15 3.65625ZM22.0188 5.72812L20.8 6.6625L21.8969 7.75937C22.0594 7.92187 22.0594 8.20625 21.8969 8.36875C21.8156 8.45 21.6938 8.49063 21.6125 8.49063C21.4906 8.49063 21.4094 8.45 21.2875 8.36875L19.8656 6.94687C19.8656 6.94687 19.8656 6.90625 19.825 6.90625C19.825 6.90625 19.825 6.86563 19.7844 6.86563C19.7844 6.825 19.7437 6.825 19.7437 6.78438C19.7437 6.74375 19.7437 6.74375 19.7437 6.70312V6.6625V4.63125C19.7437 4.3875 19.9469 4.18438 20.1906 4.18438C20.4344 4.18438 20.6375 4.3875 20.6375 4.63125V5.80938L21.5719 5.11875C21.775 4.95625 22.0187 4.99688 22.1812 5.2C22.2625 5.32188 22.2219 5.56562 22.0188 5.72812ZM20.15 3.65625C18.525 3.65625 17.1844 4.99687 17.1844 6.62187C17.1844 8.24687 18.525 9.5875 20.15 9.5875C21.775 9.5875 23.1156 8.24687 23.1156 6.62187C23.1156 4.99687 21.775 3.65625 20.15 3.65625ZM22.0188 5.72812L20.8 6.6625L21.8969 7.75937C22.0594 7.92187 22.0594 8.20625 21.8969 8.36875C21.8156 8.45 21.6938 8.49063 21.6125 8.49063C21.4906 8.49063 21.4094 8.45 21.2875 8.36875L19.8656 6.94687C19.8656 6.94687 19.8656 6.90625 19.825 6.90625C19.825 6.90625 19.825 6.86563 19.7844 6.86563C19.7844 6.825 19.7437 6.825 19.7437 6.78438C19.7437 6.74375 19.7437 6.74375 19.7437 6.70312V6.6625V4.63125C19.7437 4.3875 19.9469 4.18438 20.1906 4.18438C20.4344 4.18438 20.6375 4.3875 20.6375 4.63125V5.80938L21.5719 5.11875C21.775 4.95625 22.0187 4.99688 22.1812 5.2C22.2625 5.32188 22.2219 5.56562 22.0188 5.72812ZM20.15 3.65625C18.525 3.65625 17.1844 4.99687 17.1844 6.62187C17.1844 8.24687 18.525 9.5875 20.15 9.5875C21.775 9.5875 23.1156 8.24687 23.1156 6.62187C23.1156 4.99687 21.775 3.65625 20.15 3.65625ZM22.0188 5.72812L20.8 6.6625L21.8969 7.75937C22.0594 7.92187 22.0594 8.20625 21.8969 8.36875C21.8156 8.45 21.6938 8.49063 21.6125 8.49063C21.4906 8.49063 21.4094 8.45 21.2875 8.36875L19.8656 6.94687C19.8656 6.94687 19.8656 6.90625 19.825 6.90625C19.825 6.90625 19.825 6.86563 19.7844 6.86563C19.7844 6.825 19.7437 6.825 19.7437 6.78438C19.7437 6.74375 19.7437 6.74375 19.7437 6.70312V6.6625V4.63125C19.7437 4.3875 19.9469 4.18438 20.1906 4.18438C20.4344 4.18438 20.6375 4.3875 20.6375 4.63125V5.80938L21.5719 5.11875C21.775 4.95625 22.0187 4.99688 22.1812 5.2C22.2625 5.32188 22.2219 5.56562 22.0188 5.72812ZM20.15 3.65625C18.525 3.65625 17.1844 4.99687 17.1844 6.62187C17.1844 8.24687 18.525 9.5875 20.15 9.5875C21.775 9.5875 23.1156 8.24687 23.1156 6.62187C23.1156 4.99687 21.775 3.65625 20.15 3.65625ZM22.0188 5.72812L20.8 6.6625L21.8969 7.75937C22.0594 7.92187 22.0594 8.20625 21.8969 8.36875C21.8156 8.45 21.6938 8.49063 21.6125 8.49063C21.4906 8.49063 21.4094 8.45 21.2875 8.36875L19.8656 6.94687C19.8656 6.94687 19.8656 6.90625 19.825 6.90625C19.825 6.90625 19.825 6.86563 19.7844 6.86563C19.7844 6.825 19.7437 6.825 19.7437 6.78438C19.7437 6.74375 19.7437 6.74375 19.7437 6.70312V6.6625V4.63125C19.7437 4.3875 19.9469 4.18438 20.1906 4.18438C20.4344 4.18438 20.6375 4.3875 20.6375 4.63125V5.80938L21.5719 5.11875C21.775 4.95625 22.0187 4.99688 22.1812 5.2C22.2625 5.32188 22.2219 5.56562 22.0188 5.72812ZM20.15 3.65625C18.525 3.65625 17.1844 4.99687 17.1844 6.62187C17.1844 8.24687 18.525 9.5875 20.15 9.5875C21.775 9.5875 23.1156 8.24687 23.1156 6.62187C23.1156 4.99687 21.775 3.65625 20.15 3.65625ZM22.0188 5.72812L20.8 6.6625L21.8969 7.75937C22.0594 7.92187 22.0594 8.20625 21.8969 8.36875C21.8156 8.45 21.6938 8.49063 21.6125 8.49063C21.4906 8.49063 21.4094 8.45 21.2875 8.36875L19.8656 6.94687C19.8656 6.94687 19.8656 6.90625 19.825 6.90625C19.825 6.90625 19.825 6.86563 19.7844 6.86563C19.7844 6.825 19.7437 6.825 19.7437 6.78438C19.7437 6.74375 19.7437 6.74375 19.7437 6.70312V6.6625V4.63125C19.7437 4.3875 19.9469 4.18438 20.1906 4.18438C20.4344 4.18438 20.6375 4.3875 20.6375 4.63125V5.80938L21.5719 5.11875C21.775 4.95625 22.0187 4.99688 22.1812 5.2C22.2625 5.32188 22.2219 5.56562 22.0188 5.72812ZM20.15 3.65625C18.525 3.65625 17.1844 4.99687 17.1844 6.62187C17.1844 8.24687 18.525 9.5875 20.15 9.5875C21.775 9.5875 23.1156 8.24687 23.1156 6.62187C23.1156 4.99687 21.775 3.65625 20.15 3.65625ZM22.0188 5.72812L20.8 6.6625L21.8969 7.75937C22.0594 7.92187 22.0594 8.20625 21.8969 8.36875C21.8156 8.45 21.6938 8.49063 21.6125 8.49063C21.4906 8.49063 21.4094 8.45 21.2875 8.36875L19.8656 6.94687C19.8656 6.94687 19.8656 6.90625 19.825 6.90625C19.825 6.90625 19.825 6.86563 19.7844 6.86563C19.7844 6.825 19.7437 6.825 19.7437 6.78438C19.7437 6.74375 19.7437 6.74375 19.7437 6.70312V6.6625V4.63125C19.7437 4.3875 19.9469 4.18438 20.1906 4.18438C20.4344 4.18438 20.6375 4.3875 20.6375 4.63125V5.80938L21.5719 5.11875C21.775 4.95625 22.0187 4.99688 22.1812 5.2C22.2625 5.32188 22.2219 5.56562 22.0188 5.72812ZM5.60625 5.28125H4.75312C4.67187 5.28125 4.55 5.28125 4.42812 5.28125C4.30625 5.28125 4.225 5.28125 4.10313 5.28125H3.25C1.4625 5.28125 0 6.74375 0 8.53125V12.4719C0 13.0813 0.365625 13.5688 0.853125 13.7719V8.04375C0.853125 7.8 1.05625 7.59688 1.3 7.59688C1.54375 7.59688 1.74688 7.8 1.74688 8.04375V21.3281C1.74688 21.7344 2.07187 22.1 2.51875 22.1C2.925 22.1 3.29063 21.7344 3.29063 21.3281V16.0469C3.29063 15.3969 3.81875 14.8688 4.46875 14.8688C5.11875 14.8688 5.64687 15.3969 5.64687 16.0469V21.3281C5.64687 21.7344 5.97188 22.1 6.41875 22.1C6.86563 22.1 7.19063 21.7344 7.19063 21.3281V8.04375C7.19063 7.8 7.39375 7.59688 7.6375 7.59688C7.88125 7.59688 8.08437 7.8 8.08437 8.04375V13.7719C8.6125 13.5688 8.9375 13.0406 8.9375 12.4719V8.53125C8.85625 6.74375 7.39375 5.28125 5.60625 5.28125ZM4.42812 0.24375C3.25 0.24375 2.35625 1.09687 2.35625 2.19375C2.35625 3.33125 3.25 4.30625 4.26562 4.42812H4.59063C5.64688 4.34687 6.5 3.33125 6.5 2.19375C6.5 1.09687 5.60625 0.24375 4.42812 0.24375Z" fill="black"/>
                                        </svg>
                                        <p>Live Training on Real Clients</p>

                                    </div>
                                    <div className="flex gap-x-2">
                                        <svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20.4609 5.69531H6.53906C6.42717 5.69531 6.31987 5.73976 6.24075 5.81888C6.16163 5.89799 6.11719 6.0053 6.11719 6.11719C6.11719 6.22908 6.16163 6.33638 6.24075 6.4155C6.31987 6.49462 6.42717 6.53906 6.53906 6.53906H20.4609C20.5728 6.53906 20.6801 6.49462 20.7592 6.4155C20.8384 6.33638 20.8828 6.22908 20.8828 6.11719C20.8828 6.0053 20.8384 5.89799 20.7592 5.81888C20.6801 5.73976 20.5728 5.69531 20.4609 5.69531ZM20.8828 8.22659C20.8828 8.1147 20.8384 8.0074 20.7592 7.92828C20.6801 7.84917 20.5728 7.80472 20.4609 7.80471H6.53906C6.42717 7.80471 6.31987 7.84916 6.24075 7.92827C6.16163 8.00739 6.11719 8.1147 6.11719 8.22659C6.11719 8.33847 6.16163 8.44578 6.24075 8.5249C6.31987 8.60401 6.42717 8.64846 6.53906 8.64846H20.4609C20.5728 8.64845 20.6801 8.60401 20.7592 8.52489C20.8384 8.44577 20.8828 8.33847 20.8828 8.22659ZM12.8672 10.336C12.8672 10.2241 12.8227 10.1168 12.7436 10.0377C12.6645 9.95856 12.5572 9.91411 12.4453 9.9141H6.53906C6.42717 9.9141 6.31987 9.95855 6.24075 10.0377C6.16163 10.1168 6.11719 10.2241 6.11719 10.336C6.11719 10.4479 6.16163 10.5552 6.24075 10.6343C6.31987 10.7134 6.42717 10.7579 6.53906 10.7579H12.4453C12.5572 10.7578 12.6645 10.7134 12.7436 10.6343C12.8227 10.5552 12.8672 10.4479 12.8672 10.336ZM6.11719 14.3438C6.11719 14.6776 6.21616 15.0038 6.40159 15.2813C6.58702 15.5589 6.85057 15.7751 7.15892 15.9029C7.46727 16.0306 7.80657 16.064 8.13391 15.9989C8.46125 15.9338 8.76194 15.7731 8.99794 15.5371C9.23394 15.3011 9.39465 15.0004 9.45976 14.673C9.52487 14.3457 9.49146 14.0064 9.36373 13.698C9.23601 13.3897 9.01972 13.1261 8.74221 12.9407C8.4647 12.7553 8.13844 12.6563 7.80469 12.6563C7.35729 12.6568 6.92836 12.8348 6.612 13.1511C6.29564 13.4675 6.11769 13.8964 6.11719 14.3438ZM8.64844 14.3438C8.64844 14.5107 8.59895 14.6738 8.50624 14.8126C8.41353 14.9513 8.28175 15.0595 8.12758 15.1234C7.9734 15.1872 7.80375 15.2039 7.64008 15.1714C7.47641 15.1388 7.32607 15.0585 7.20807 14.9405C7.09007 14.8225 7.00971 14.6721 6.97715 14.5084C6.94459 14.3448 6.9613 14.1751 7.02516 14.0209C7.08903 13.8668 7.19717 13.735 7.33592 13.6423C7.47468 13.5496 7.63781 13.5001 7.80469 13.5001C8.02846 13.5001 8.24307 13.589 8.40131 13.7472C8.55954 13.9054 8.64844 14.1201 8.64844 14.3438Z" fill="black"/>
                                            <path d="M25.7344 0H1.26562C0.930071 0.000367947 0.608367 0.13383 0.371096 0.371103C0.133824 0.608376 0.000365151 0.930082 0 1.26564L0 18.5627C0.000365151 18.8982 0.133824 19.2199 0.371096 19.4572C0.608367 19.6945 0.930071 19.8279 1.26562 19.8283H14.048L14.6503 18.9846H1.26562C1.15378 18.9844 1.04656 18.9399 0.967475 18.8608C0.88839 18.7817 0.843896 18.6745 0.84375 18.5627V1.26564C0.843896 1.15379 0.88839 1.04657 0.967475 0.967486C1.04656 0.8884 1.15378 0.843906 1.26562 0.84376H25.7344C25.8462 0.843906 25.9534 0.8884 26.0325 0.967486C26.1116 1.04657 26.1561 1.15379 26.1562 1.26564V18.5627C26.1561 18.6745 26.1116 18.7817 26.0325 18.8608C25.9534 18.9399 25.8462 18.9844 25.7344 18.9845H22.8967L23.499 19.8283H25.7344C26.0699 19.8279 26.3916 19.6945 26.6289 19.4572C26.8662 19.2199 26.9996 18.8982 27 18.5627V1.26564C26.9996 0.930082 26.8662 0.608376 26.6289 0.371103C26.3916 0.13383 26.0699 0.000367947 25.7344 0Z" fill="black"/>
                                            <path d="M17.4881 20.5323L16.7513 21.5514L16.6676 21.1388C16.6494 20.9962 16.5773 20.866 16.4662 20.775C16.405 20.725 16.3343 20.6881 16.2584 20.6665C16.1825 20.6448 16.103 20.6389 16.0247 20.6491L15.497 20.7023L16.3004 19.5767C16.0156 19.5192 15.7468 19.4003 15.5127 19.2282L14.4516 20.7146C14.3863 20.8033 14.349 20.9094 14.3443 21.0194C14.3395 21.1293 14.3676 21.2382 14.425 21.3322C14.4832 21.4271 14.5677 21.5031 14.6683 21.5508C14.7688 21.5986 14.8811 21.6161 14.9915 21.6012L15.8822 21.5114L16.0391 22.2857C16.0522 22.3946 16.0969 22.4973 16.1679 22.5809C16.2388 22.6645 16.3328 22.7254 16.4382 22.756C16.4931 22.7727 16.5501 22.7811 16.6075 22.7812C16.6982 22.7812 16.7877 22.7599 16.8687 22.719C16.9497 22.678 17.0199 22.6186 17.0737 22.5455L18.5917 20.4457C18.3703 20.5355 18.1342 20.5834 17.8954 20.5869C17.7578 20.5865 17.6209 20.5681 17.4881 20.5323ZM22.0335 19.2282C21.7994 19.4002 21.5305 19.5192 21.2457 19.5767L22.0492 20.7023L21.5214 20.6491C21.4432 20.6389 21.3636 20.6448 21.2877 20.6664C21.2118 20.6881 21.1411 20.725 21.08 20.775C20.9688 20.866 20.8967 20.9962 20.8785 21.1388L20.7949 21.5512L20.0567 20.5302C19.6894 20.6211 19.3026 20.5911 18.9537 20.4446L20.4746 22.5484C20.5283 22.6208 20.5982 22.6796 20.6788 22.7201C20.7594 22.7605 20.8483 22.7814 20.9385 22.7812C20.9959 22.7811 21.0531 22.7727 21.108 22.756C21.2134 22.7255 21.3073 22.6646 21.3783 22.5809C21.4492 22.4973 21.494 22.3946 21.507 22.2858L21.664 21.5114L22.5547 21.6012C22.6651 21.6162 22.7774 21.5987 22.878 21.5509C22.9786 21.5032 23.0631 21.4272 23.1212 21.3322C23.1783 21.239 23.2066 21.131 23.2024 21.0218C23.1981 20.9126 23.1617 20.807 23.0975 20.7185L22.0335 19.2282ZM19.8815 19.7063C20.1583 19.5858 20.3769 19.3616 20.4905 19.0819C20.5292 19.0012 20.5769 18.9252 20.6326 18.8551C20.7182 18.8222 20.8073 18.7992 20.8981 18.7867C21.0484 18.7905 21.1974 18.7579 21.3323 18.6914C21.4672 18.625 21.584 18.5269 21.6726 18.4054C21.7612 18.284 21.819 18.1428 21.8411 17.9941C21.8632 17.8454 21.8489 17.6935 21.7993 17.5516C21.783 17.4602 21.7773 17.3672 21.7825 17.2745C21.8309 17.2016 21.8873 17.1343 21.9505 17.0739C22.1836 16.8779 22.3304 16.5982 22.359 16.295C22.3304 15.9918 22.1836 15.7121 21.9505 15.5161C21.8878 15.456 21.8316 15.3893 21.7831 15.3171C21.7773 15.2239 21.7828 15.1303 21.7993 15.0384C21.8717 14.7492 21.8267 14.443 21.6741 14.1868C21.4763 13.9615 21.1973 13.8236 20.8981 13.8033C20.8078 13.7907 20.7191 13.7681 20.6338 13.7357C20.5775 13.6654 20.5293 13.589 20.4903 13.5079C20.3768 13.2281 20.1582 13.004 19.8813 12.8837C19.5931 12.819 19.2911 12.8706 19.0407 13.0273C18.9562 13.0729 18.8663 13.1077 18.7731 13.1309C18.6799 13.1077 18.59 13.0729 18.5055 13.0273C18.255 12.8707 17.9529 12.8191 17.6646 12.8837C17.3879 13.0042 17.1693 13.2284 17.0557 13.5081C17.017 13.5887 16.9693 13.6648 16.9136 13.7349C16.828 13.7678 16.7389 13.7908 16.6481 13.8033C16.3489 13.8235 16.0699 13.9613 15.8721 14.1866C15.7195 14.4429 15.6745 14.7491 15.7468 15.0384C15.7632 15.1298 15.7688 15.2228 15.7637 15.3155C15.7153 15.3883 15.6589 15.4556 15.5956 15.5161C15.3625 15.7121 15.2158 15.9918 15.1872 16.295C15.2158 16.5982 15.3625 16.8779 15.5956 17.0739C15.6584 17.134 15.7146 17.2007 15.7631 17.2728C15.7688 17.3661 15.7634 17.4596 15.7468 17.5516C15.6974 17.6935 15.6831 17.8454 15.7052 17.9941C15.7272 18.1428 15.7851 18.2839 15.8737 18.4054C15.9623 18.5268 16.0791 18.625 16.2139 18.6914C16.3488 18.7578 16.4978 18.7905 16.6481 18.7867C16.7384 18.7992 16.8271 18.8219 16.9124 18.8543C16.9687 18.9245 17.0169 19.001 17.0559 19.0821C17.1694 19.3619 17.388 19.586 17.6648 19.7063C17.7399 19.7306 17.8183 19.7429 17.8972 19.7427C18.1108 19.7284 18.3185 19.667 18.5055 19.5627C18.59 19.5171 18.6799 19.4822 18.7731 19.4591C18.8663 19.4822 18.9562 19.5171 19.0407 19.5627C19.2912 19.7193 19.5933 19.7709 19.8815 19.7063ZM18.1454 18.7997C18.0744 18.8354 18.0011 18.8664 17.9261 18.8926C17.8781 18.8244 17.835 18.753 17.7971 18.6788C17.7189 18.4755 17.5836 18.2991 17.4073 18.1712C17.2311 18.0432 17.0215 17.969 16.804 17.9576C16.7225 17.9443 16.6421 17.9255 16.5632 17.9011C16.5645 17.8197 16.5714 17.7385 16.5838 17.6581C16.6262 17.4442 16.62 17.2234 16.5657 17.0123C16.4871 16.8144 16.3647 16.6369 16.2077 16.4931C16.1458 16.4318 16.0891 16.3655 16.0381 16.295C16.0891 16.2244 16.1458 16.1581 16.2077 16.0968C16.3647 15.953 16.4871 15.7755 16.5657 15.5777C16.62 15.3664 16.6262 15.1457 16.5838 14.9317C16.5715 14.8512 16.5646 14.77 16.5632 14.6886C16.6421 14.6645 16.7226 14.6457 16.804 14.6324C17.0216 14.6212 17.2312 14.547 17.4075 14.419C17.5838 14.291 17.7191 14.1146 17.7971 13.9112C17.835 13.8369 17.8781 13.7655 17.9261 13.6974C18.0011 13.7235 18.0744 13.7546 18.1454 13.7903C18.3326 13.9106 18.5505 13.9746 18.7731 13.9746C18.9957 13.9746 19.2135 13.9106 19.4008 13.7903C19.4718 13.7546 19.5451 13.7235 19.6201 13.6974C19.6681 13.7655 19.7112 13.837 19.7491 13.9112C19.8272 14.1145 19.9626 14.2908 20.1389 14.4188C20.3151 14.5468 20.5247 14.621 20.7422 14.6324C20.8236 14.6456 20.9041 14.6645 20.983 14.6888C20.9817 14.7702 20.9748 14.8514 20.9624 14.9319C20.92 15.1458 20.9261 15.3665 20.9805 15.5777C21.0591 15.7755 21.1815 15.953 21.3385 16.0968C21.4003 16.1581 21.457 16.2244 21.5081 16.295C21.457 16.3655 21.4003 16.4318 21.3385 16.4931C21.1815 16.6369 21.0591 16.8144 20.9805 17.0123C20.9261 17.2235 20.92 17.4443 20.9624 17.6583C20.9747 17.7387 20.9816 17.8199 20.983 17.9013C20.9041 17.9255 20.8236 17.9443 20.7422 17.9576C20.5246 17.9688 20.315 18.0429 20.1387 18.1709C19.9624 18.2989 19.8271 18.4754 19.7491 18.6788C19.7112 18.753 19.6681 18.8245 19.6201 18.8926C19.5451 18.8664 19.4718 18.8354 19.4008 18.7997C19.2135 18.6793 18.9957 18.6153 18.7731 18.6153C18.5505 18.6153 18.3326 18.6793 18.1454 18.7997Z" fill="black"/>
                                            <path d="M20.25 16.2949C20.25 16.0029 20.1634 15.7174 20.0011 15.4746C19.8389 15.2318 19.6083 15.0425 19.3385 14.9308C19.0687 14.819 18.7718 14.7898 18.4854 14.8467C18.1989 14.9037 17.9358 15.0443 17.7293 15.2508C17.5228 15.4573 17.3822 15.7204 17.3252 16.0069C17.2683 16.2933 17.2975 16.5902 17.4093 16.86C17.521 17.1298 17.7103 17.3604 17.9531 17.5226C18.1959 17.6849 18.4814 17.7715 18.7734 17.7715C19.1649 17.771 19.5402 17.6153 19.817 17.3385C20.0938 17.0617 20.2495 16.6864 20.25 16.2949ZM18.7734 16.9277C18.6483 16.9277 18.5259 16.8906 18.4219 16.8211C18.3178 16.7515 18.2367 16.6527 18.1888 16.5371C18.1409 16.4214 18.1284 16.2942 18.1528 16.1715C18.1772 16.0487 18.2375 15.9359 18.326 15.8474C18.4145 15.7589 18.5272 15.6987 18.65 15.6743C18.7727 15.6498 18.9 15.6624 19.0156 15.7103C19.1312 15.7582 19.2301 15.8393 19.2996 15.9433C19.3691 16.0474 19.4063 16.1698 19.4063 16.2949C19.4061 16.4627 19.3393 16.6235 19.2207 16.7422C19.1021 16.8608 18.9412 16.9275 18.7734 16.9277Z" fill="black"/>
                                            <path d="M24.4688 18.1408C24.6925 18.1405 24.9069 18.0516 25.0651 17.8934C25.2233 17.7352 25.3123 17.5207 25.3125 17.297V2.53125C25.3123 2.30754 25.2233 2.09306 25.0651 1.93488C24.9069 1.77669 24.6925 1.68772 24.4688 1.6875H2.53125C2.30754 1.68772 2.09306 1.77669 1.93488 1.93488C1.77669 2.09306 1.68772 2.30754 1.6875 2.53125V17.297C1.68772 17.5207 1.77669 17.7352 1.93488 17.8934C2.09306 18.0516 2.30754 18.1405 2.53125 18.1408H14.8937C14.8713 17.9481 14.8721 17.7534 14.896 17.5609C14.8193 17.4773 14.7476 17.3892 14.6815 17.297H2.53125V5.81729L5.78265 2.56586C5.79269 2.55484 5.80213 2.54329 5.81092 2.53125H21.1891C21.1979 2.54329 21.2073 2.55484 21.2173 2.56586L24.4689 5.81742L24.4694 17.297H22.8653C22.7992 17.3892 22.7276 17.4773 22.6509 17.5609C22.6748 17.7534 22.6756 17.9481 22.6531 18.1408L24.4688 18.1408ZM2.53125 4.62416V2.53124H4.62415L2.53125 4.62416ZM22.3759 2.53124H24.4688L24.4688 4.62425L22.3759 2.53124Z" fill="black"/>
                                        </svg>
                                        <p>Certificate</p>

                                    </div>
                                </div>

                                <p className="w-full px-4 my-4 text-[#1B1E49]">{course.Description}</p>

                                <p className="w-full ml-4 space-x-2 my-6">
                                    <span className="font-bold text-green-800 text-xl">&#8377;{course.FinalPrice}</span>
                                    <span className="text-gray-400 text-sm font-bold">Incl. Taxes</span>
                                    <span className="text-gray-500 text-lg font-bold line-through">&#8377;{course.OriginalPrice}</span>
                                    <span className="text-white bg-red-400 p-2 rounded-md">{course.Discount} Off</span>
                                </p>


                                <div className="w-full flex justify-between px-4 my-6">
                                    <button onClick={()=>handleTabClick(index)} className={`inline-block py-2 text-[#1B1E49] transition border border-[#1B1E49] rounded-md hover:bg-[#1B1E49] hover:text-white hover:border-primary px-2 font-bold`}>
                                            View Course Details
                                    </button>

                                    <Link href={`${course.FormLink?course.FormLink:"/"}`}>
                                        <button disabled={course.IsAvailable=='false'} className={`inline-block py-2 text-base transition bg-[#1B1E49] rounded-md ${course.IsAvailable=='false'?"text-red-600 font-bold bg-red-200":"hover:bg-green-800 hover:text-white text-[#FBDC6D] font-medium"} px-3 `}>
                                            {course.IsAvailable=="true"?"Register":"Coming Soon"}
                                        </button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
                <div id="courseDetails" >
                    {activeTab !== null ?
                        <div className="mt-4 p-4 bg-gray-100 rounded font-bold">
                            {courses[activeTab].Heading}
                            <div>{courses[activeTab].CourseContent?.map((module, index)=>(
                                <p key={index} className="ml-6">
                                    ✅ {module}
                                </p>
                            ))}</div>
                        </div>
                    :
                        <div className="mt-4 p-4 bg-gray-100 rounded">
                            <p>Select a Course to see the details</p>
                        </div>
                    }
                </div>
            </div>
        </section>
            
        </>

     );
}
 
export default Courses;
