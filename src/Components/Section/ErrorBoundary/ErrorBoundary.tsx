import React, { Component, ErrorInfo, ReactNode } from "react";
import style from '../../css/Product.module.css'

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return(
          <div className={style.card}>
              <h2>The data is unavailable :(</h2>
          </div>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;