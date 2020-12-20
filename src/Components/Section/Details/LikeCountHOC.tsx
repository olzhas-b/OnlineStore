import * as React from "react";

interface ExternalProps {
  style?: React.CSSProperties;
}

export interface InjectedProps {
  likeCount?: number;
}

interface Options {
  debug?: boolean;
}

interface State {
  likeCount: number;
}

export const likeCountHOC = ({ debug = false }: Options = {}) =>
  <OriginalProps extends {}>(WrappedComponent: React.ComponentType<OriginalProps & InjectedProps>) => {

    type ResultProps = OriginalProps & ExternalProps;

    return class LikeCountHOC extends React.Component<ResultProps, State> {

      static displayName = `LikeCountHOC(${WrappedComponent.displayName})`;

      constructor(props: ResultProps) {
        super(props);

        this.state = {
          likeCount: 0,
        };

        this.onClick = this.onClick.bind(this);
      }

      public render(): JSX.Element {
        return (
          <div onClick={this.onClick} style={this.props.style}>
            <span className="text-muted">Liked {this.state.likeCount} times</span>
            <WrappedComponent {...this.props} {...this.state} />
          </div>
        )
      }

      private onClick() {
        if(this.state.likeCount === 1) {
          alert("You've already liked this product")
        }
        else {
          this.setState({ likeCount: this.state.likeCount + 1 });
        }
      }
    }
  };