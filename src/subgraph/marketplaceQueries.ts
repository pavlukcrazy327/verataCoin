import { gql } from "graphql-request";

export const QUERY_GET_ListNFTs = () => gql`
  query ListNfts {
    listNfts(orderBy: nft_id_ASC) {
      id
      price
      seller
      sold
      nft {
        uri
        name
        index
        id
        description
        collection
        image
      }
    }
  }
`;


export const QUERY_GET_BuyNFT_BY_OWNER = (account: string) => gql`
  query BuyNFTByOwner {
    buyNfts(orderBy: nft_id_ASC, where: {buyer_contains: "${account.toLowerCase()}"}) {
    buyer
    id
    seller
    nft {
      collection
      description
      id
      image
      index
      name
      uri
    }
  }
  }
`;

export const QUERY_GET_NFT_ID = (id: string) => gql`
  query NFTById {
    nftById(id: "${id.toLocaleLowerCase()}") {
      id
      collection
      date
      description
      image
      index
      name
      uri
      owner {
        id
      }
      listNFTs {
        id
        seller
        price
        sold
      }
      attributes {
        traitType
        value
      }
    }
  }
`;

export const QUERY_GET_PHYSICAL_NFT_ID = (id: string) => gql`
  query NFTById {
    claimPhysicalNfts(where: {nft: {id_in: "${id.toLocaleLowerCase()}"}}) {
      nft {
        id
        name
        image
        date
      }
      id
      date
    }
  }
`;
