"use client";

import React, { FC, useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { isValidPhoneNumber } from "libphonenumber-js";
import Image from "next/image";

// CSS
import "@/styles/contact-us/contact-us-form.css";
import "react-phone-number-input/style.css";

// Images
import contactUsFormImgSrc from "@/public/images/sections-img/contact-us-form.jpg";

const PhoneInput = dynamic(() => import("react-phone-number-input"), {
  ssr: false,
});

interface ContactUsFormDataTypes {
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  message: string;
}

type ContactUsFormMsgToUserType = string | null;

type UserCountryType = string;

const ContactUsForm: FC = () => {
  const t_ContactUsForm_ContactUs = useTranslations("ContactUs.ContactUsForm");
  const t_Fields_Form_ContactUsForm_ContactUs = useTranslations(
    "ContactUs.ContactUsForm.form.fields"
  );
  const t_MsgToUser_Form_ContactUsForm_ContactUs = useTranslations(
    "ContactUs.ContactUsForm.form.msgToUser"
  );

  const { sectionHeading, submitBtn, companyIntroMessage } = {
    sectionHeading: t_ContactUsForm_ContactUs("sectionHeading"),
    submitBtn: t_ContactUsForm_ContactUs("submitBtn"),
    companyIntroMessage: t_ContactUsForm_ContactUs("companyIntroMessage"),
  };

  const {
    fullNameLabel,
    emailAdressLabel,
    phoneNumberLabel,
    messageLabel,
    messagePlaceholder,
  } = {
    fullNameLabel: t_Fields_Form_ContactUsForm_ContactUs("fullNameLabel"),
    emailAdressLabel: t_Fields_Form_ContactUsForm_ContactUs("emailAdressLabel"),
    phoneNumberLabel: t_Fields_Form_ContactUsForm_ContactUs("phoneNumberLabel"),
    messageLabel: t_Fields_Form_ContactUsForm_ContactUs("messageLabel"),
    messagePlaceholder:
      t_Fields_Form_ContactUsForm_ContactUs("messagePlaceholder"),
  };

  const {
    missingFullName,
    missingMessage,
    incorrectEmailFormat,
    incorrectPhoneNumberFormat,
    bothEmailAndPhoneMissing,
    formSubmitted,
  } = {
    missingFullName:
      t_MsgToUser_Form_ContactUsForm_ContactUs("missingFullName"),
    missingMessage: t_MsgToUser_Form_ContactUsForm_ContactUs("missingMessage"),
    incorrectEmailFormat: t_MsgToUser_Form_ContactUsForm_ContactUs(
      "incorrectEmailFormat"
    ),
    incorrectPhoneNumberFormat: t_MsgToUser_Form_ContactUsForm_ContactUs(
      "incorrectPhoneNumberFormat"
    ),
    bothEmailAndPhoneMissing: t_MsgToUser_Form_ContactUsForm_ContactUs(
      "bothEmailAndPhoneMissing"
    ),
    formSubmitted: t_MsgToUser_Form_ContactUsForm_ContactUs("formSubmitted"),
  };

  const [contactUsFormData, setContactUsFormData] =
    useState<ContactUsFormDataTypes>({
      fullName: "",
      emailAddress: "",
      phoneNumber: "",
      message: "",
    });

  const [contactUsFormMsgToUser, setContactUsFormMsgToUser] =
    useState<ContactUsFormMsgToUserType>(null);

  const [isContactFormMsgToUserModalOpen, setIsContactFormMsgToUserModalOpen] =
    useState(false);

  const [userCountry, setUserCountry] = useState<UserCountryType>("US");

  useEffect(() => {
    const fetchUserCountry = () => {
      const userCountryCookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith("userCountry="))
        ?.split("=")[1];

      if (userCountryCookie) {
        setUserCountry(userCountryCookie);
        return;
      }
    };

    fetchUserCountry();
  }, []);

  const validateContactUsFormInput = (
    contactUsFormData: ContactUsFormDataTypes
  ): ContactUsFormMsgToUserType => {
    if (!contactUsFormData.fullName) {
      return missingFullName;
    } else if (!contactUsFormData.message) {
      return missingMessage;
    } else if (
      !contactUsFormData.emailAddress &&
      !contactUsFormData.phoneNumber
    ) {
      return bothEmailAndPhoneMissing;
    } else if (
      contactUsFormData.phoneNumber &&
      !isValidPhoneNumber(contactUsFormData.phoneNumber, userCountry as any)
    ) {
      return incorrectPhoneNumberFormat;
    }
    return null;
  };

  const handleContactUsFormInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactUsFormData((prev) => ({ ...prev, [name]: value }));
    setContactUsFormMsgToUser(null);
    setIsContactFormMsgToUserModalOpen(false);
  };

  const handleContactUsPhoneInputChange = (value: string | undefined) => {
    setContactUsFormData((prev) => ({ ...prev, phoneNumber: value || "" }));
    setContactUsFormMsgToUser(null);
    setIsContactFormMsgToUserModalOpen(false);
  };

  const handleContactUsFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const contactUsFormValidationResult =
      validateContactUsFormInput(contactUsFormData);

    if (contactUsFormValidationResult) {
      setContactUsFormMsgToUser(contactUsFormValidationResult);
      setIsContactFormMsgToUserModalOpen(true);
      return;
    }

    console.log("Form submitted:", contactUsFormData);

    setContactUsFormData({
      fullName: "",
      emailAddress: "",
      phoneNumber: "",
      message: "",
    });

    setContactUsFormMsgToUser(null);
    setIsContactFormMsgToUserModalOpen(false);
  };

  const closeContactFormMsgToUserModal = () => {
    setIsContactFormMsgToUserModalOpen(false);
    setContactUsFormMsgToUser(null);
  };

  return (
    <section
      id="contact-us-form"
      className="contact-us-form"
      aria-labelledby="contact-us-form-heading"
    >
      <div className="contact-us-form-container">
        <h2 id="contact-us-form-heading" className="contact-us-form-heading">
          {sectionHeading}
        </h2>

        <div className="contact-us-form-content">
          <div className="company-intro">
            <Image
              src={contactUsFormImgSrc}
              width={1440}
              height={1440}
              alt=""
              className="company-intro-img"
              sizes="(max-width: 768px) 100vw, 50vw"
              aria-describedby="company-intro-message"
              priority
              placeholder="blur"
              layout="responsive"
            />
            <p className="company-intro-message">{companyIntroMessage}</p>
          </div>

          <form onSubmit={handleContactUsFormSubmit} className="contact-form">
            <div className="contact-form-user-info">
              <div className="contact-form-group-full-name">
                <label
                  htmlFor="fullName"
                  className="contact-form-label-full-name"
                >
                  {fullNameLabel}
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={contactUsFormData.fullName}
                  onChange={handleContactUsFormInputChange}
                  className="contact-form-input-full-name"
                  autoComplete="name"
                  placeholder="John Doe"
                />
              </div>

              <div className="contact-form-group-email-address">
                <label
                  htmlFor="emailAddress"
                  className="contact-form-label-email-address"
                >
                  {emailAdressLabel}
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  name="emailAddress"
                  value={contactUsFormData.emailAddress}
                  onChange={handleContactUsFormInputChange}
                  className="contact-form-input-email-address"
                  autoComplete="email"
                  placeholder="john.doe@gmail.com"
                />
              </div>

              <div className="contact-form-group-phone-number">
                <label
                  htmlFor="phoneNumber"
                  className="contact-form-label-phone-number"
                >
                  {phoneNumberLabel}
                </label>
                <PhoneInput
                  id="phoneNumber"
                  name="phoneNumber"
                  international
                  defaultCountry={userCountry as any}
                  value={contactUsFormData.phoneNumber}
                  onChange={handleContactUsPhoneInputChange}
                  className="contact-form-input-phone-number"
                  placeholder="+507 6123-4567"
                  addInternationalOption={false}
                  aria-label={phoneNumberLabel}
                  autoComplete="tel"
                />
              </div>
            </div>

            <div className="contact-form-group-message">
              <label htmlFor="message" className="contact-form-label-message">
                {messageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                value={contactUsFormData.message}
                onChange={handleContactUsFormInputChange}
                className="contact-form-textarea-message"
                placeholder={messagePlaceholder}
                autoComplete="off"
              ></textarea>
            </div>

            <button type="submit" className="contact-form-submit-btn">
              {submitBtn}
            </button>

            {isContactFormMsgToUserModalOpen && contactUsFormMsgToUser && (
              <div
                className="contact-form-msg-to-user-modal"
                role="dialog"
                aria-modal="true"
              >
                <div className="contact-form-msg-to-user-modal-content">
                  <p className="contact-form-msg-to-user" role="alert">
                    {contactUsFormMsgToUser}
                  </p>
                  <button
                    className="contact-form-msg-to-user-modal-close-btn"
                    onClick={closeContactFormMsgToUserModal}
                    aria-label="Contact form message to user modal close button"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

ContactUsForm.displayName = "ContactUsForm";

export default ContactUsForm;
