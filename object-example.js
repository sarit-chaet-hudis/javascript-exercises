const NFTStore = {
  artPieces: [
    {
      pieceName: "Emo Flamingos",
      price: 30,
      ownerList: [
        {
          name: "Fida Ernest",
          userID: 23849,
          purchaseDate: "09/13/2021",
        },
        {
          name: "Eric Karger",
          userID: 23510,
          purchaseDate: "11/29/2021",
        },
      ],
    },
    {
      pieceName: "Where is my bit wallet",
      price: 100,
      ownerList: [],
    },
  ],
  storeCredits: 1000,
};

// artPieces [piece1, piece2..]
//      piece1 {pieceName, price, ownerList}
//          ownerList [ owner1, owner2..]
//              owner {name, userID, purchaseDate}
// storeCredits (number)

const buyer = {
  name: "Ernest Daniel",
  userID: 23849,
  purchaseDate: "13/9/2021",
};
