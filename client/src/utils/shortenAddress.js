// eslint-disable-next-line import/prefer-default-export
export const shortenAddress = (address) => `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
