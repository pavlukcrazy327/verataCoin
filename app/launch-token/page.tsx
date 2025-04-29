'use client'
import React, { useState } from 'react';
import MainLayout from "@/src/Layouts/MainLayout/MainLayout";
import { Plus } from "lucide-react";

import './launchToken.scss';

interface FormData {
  name: string;
  ticker: string;
  description: string;
  file: File | null;
  preview: string | null;
}

interface Errors {
  name?: string;
  ticker?: string;
  description?: string;
  file?: string;
}

const LaunchToken = () => {

  const [formData, setFormData] = useState<FormData>({
    name: "",
    ticker: "",
    description: "",
    file: null,
    preview: null,
  });
  const [errors, setErrors] = useState<Errors>({});

  // Validation functions for text fields
  const validateTextField = (field: keyof FormData, value: string): string | undefined => {
    if (!value.trim()) {
      return `${field} is required`;
    }
    if (field === "name" && value.length < 3) {
      return "Name must be at least 3 characters long";
    }
    if (field === "ticker" && value.length > 5) {
      return "Ticker must be 5 characters or fewer";
    }
    return undefined;
  };

  // Validation for file input
  const validateFile = (file: File | null): string | undefined => {
    if (!file) {
      return "File is required";
    }
    if (!["image/jpeg", "image/png", "video/mp4"].includes(file.type)) {
      return "Invalid file type. Allowed types: JPEG, PNG, MP4";
    }
    if (file.size > 100 * 1024 * 1024) {
      return "File size must be less than 100MB";
    }
    return undefined;
  };

  // Handle text input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: validateTextField(name as keyof FormData, value) });
  };

  // Handle file input change
  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //   const file = e.target.files ? e.target.files[0] : null;

  //   setFormData({ ...formData, file });
  //   setErrors({ ...errors, file: validateFile(file) });
  // };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files ? e.target.files[0] : null;

    if (file) {
      const errorMessage = validateFile(file);

      if (!errorMessage) {
        const previewURL = URL.createObjectURL(file); // Generate preview URL
        setFormData({ ...formData, file, preview: previewURL }); // Update file and preview
        setErrors({ ...errors, file: undefined }); // Clear previous file error
      } else {
        setFormData({ ...formData, file: null, preview: null }); // Clear file and preview
        setErrors({ ...errors, file: errorMessage }); // Set error message
      }
    } else {
      setFormData({ ...formData, file: null, preview: null }); // Clear file and preview
      setErrors({ ...errors, file: "File is required." }); // Add error if no file selected
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    let hasErrors = false;
    const newErrors: Errors = {};

    // Validate all text fields
    Object.keys(formData).forEach((field) => {
      if (field !== "file") {
        const value = formData[field as keyof FormData];
        const error = validateTextField(field as keyof FormData, value as string);
        if (error) {
          newErrors[field as keyof Errors] = error;
          hasErrors = true;
        }
      }
    });

    // Validate file input
    const fileError = validateFile(formData.file);
    if (fileError) {
      newErrors.file = fileError;
      hasErrors = true;
    }

    setErrors(newErrors);

    if (!hasErrors) {
      alert("Coin created successfully!");
      // Submit form or send data to an API
    }
  };

  return (
    <section  className='launch-Token'>
      <div className="flex launch">
        <button className="btn-secondary">0x7 bought 10 ETH $KURT</button>
        <button className="btn-primary w-[200px]">Login</button>
      </div>
      <div className="launch-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={errors.name ? "error" : ""}
            />
            {errors.name && <small className="error">{errors.name}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="ticker">Ticker</label>
            <input
              type="text"
              id="ticker"
              name="ticker"
              value={formData.ticker}
              onChange={handleInputChange}
              className={errors.ticker ? "error" : ""}
            />
            {errors.ticker && <small className="error">{errors.ticker}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className={errors.description ? "error" : ""}
            />
            {errors.description && (
              <small className="error">{errors.description}</small>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="file">Image or Video</label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleFileChange}
              className={errors.file ? "error" : ""}
            />
            {errors.file && <small className="error">{errors.file}</small>}
          </div>
          {formData.preview && formData.file?.type.startsWith("image/") && (
            <div className="mt-2">
              <img
                src={formData.preview}
                alt="Preview"
                className="max-w-full h-auto rounded"
              />
            </div>
          )}
          {formData.preview && formData.file?.type.startsWith("video/") && (
            <div className="mt-2">
              <video
                controls
                className="max-w-full h-auto rounded"
                src={formData.preview}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          <div className="flex launch-btn">
            <button type="submit"className='btn-green'>Create Coin</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default function LaunchTokenComponent() {
  return <MainLayout>
    <LaunchToken />
  </MainLayout>
};