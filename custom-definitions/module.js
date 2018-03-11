declare function AcceptCallBack(): void

declare function Accept(AcceptCallBack): void

declare var module: {
  hot: {
    accept: Accept,
  },
}
