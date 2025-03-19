"use client";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { RootState } from "@/store/store";
import { hideAlert } from "@/store/slices/alertSlice";

const Alert = () => {
  const dispatch = useDispatch();
  const { message, type } = useSelector((state: RootState) => state.alert);

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        dispatch(hideAlert());
      }, 3000);
    }
  }, [message, dispatch]);

  if (!message) return '';

  return (
    <div className="alert-container">
      <div className={`alert alert-${type} alert-dismissible fade show small d-flex align-items-center`} role="alert">
        {message}
        <button type="button" className="btn-close" onClick={() => dispatch(hideAlert())}></button>
      </div>
    </div>
  );
};

export default Alert;
