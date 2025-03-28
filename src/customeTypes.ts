"use client";
export interface recordType {
  _id: string;
  title: string;
  description: string;
  record_date: string;
  record_start_date: string;
  record_start_time: string;
  created_by: {
    date: string,
    user: string,
    email: string,
  }
};

export interface userType {
fcm_token: string,
firstname: string
lastname: string,
password: string, 
username: string
} 