import React, { Component } from 'react';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error });
  }

  render() {
    const { error } = this.state;
    const { fallback: Fallback, children } = this.props;

    return error ? <Fallback error={error} /> : children;
  }
}