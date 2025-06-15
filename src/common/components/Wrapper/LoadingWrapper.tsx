import React from "react";
import Skeleton from "../Skeleton";

interface LoadingWrapperProps {
  loading: boolean;
  children: React.ReactNode;
}

const LoadingWrapper: React.FC<LoadingWrapperProps> = ({
  loading,
  children,
}) => {
  return <>{loading ? <Skeleton /> : children}</>;
};

export default LoadingWrapper;
