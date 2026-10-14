import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in component tree:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FAF7F2] text-[#2B2B2B] p-8 flex flex-col items-center justify-center text-center font-sans">
          <div className="w-16 h-16 rounded-full bg-[#E9E4D8] text-[#344E41] flex items-center justify-center mb-4 text-2xl font-serif">
            !
          </div>
          <h1 className="font-serif text-3xl font-bold text-[#344E41]">Something went wrong</h1>
          <p className="text-sm text-[#2B2B2B]/70 mt-2 max-w-md">
            {this.state.error?.message || 'An unexpected rendering error occurred.'}
          </p>
          <button
            onClick={() => {
              this.setState({ hasError: false, error: null });
              window.location.reload();
            }}
            className="mt-6 px-6 py-2.5 rounded-full bg-[#344E41] text-white text-xs font-semibold cursor-pointer"
          >
            Reload Preview
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
