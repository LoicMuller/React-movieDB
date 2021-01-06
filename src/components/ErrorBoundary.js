import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Mettez à jour l'état, de façon à montrer l'UI de repli au prochain rendu.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // Vous pouvez afficher n'importe quelle UI de repli.
      return (
        <div className="container text-center">
          <h2 className="font-weight-bold">
            There are no movies that matched your query.
            <br />
          </h2>
          <button
            className="btn btn-outline-dark btn-lg mt-3"
            onClick={() => window.location.reload(false)}
          >
            Click to reload the page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
