const shorthenAddress = (address: string) => `${address.slice(0, 5)}...${address.slice(address.length - 3)}`;

export default shorthenAddress;
