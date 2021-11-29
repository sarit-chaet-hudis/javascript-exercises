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

// NFTStore {...}
// artPieces [piece1, piece2..]
//      piece1 {pieceName, price, ownerList}
//          ownerList [ owner1, owner2..]
//              owner {name, userID, purchaseDate}
// storeCredits (number)

//the last owner of the first piece in our store, the famous "Emo Flamingo"
const EmoFlamingoPrice = NFTStore.artPieces[0].price;
console.log(EmoFlamingoPrice); //30

// NFTStore.artPieces[0].ownerList.push(buyer);
// console.log(NFTStore.artPieces[0].ownerList); //see the list with new buyer

// NFTStore.storeCredits += NFTStore.artPieces[0].price;
// console.log(NFTStore.storeCredits); //1030

function buyPiece(NFTStore, buyer, pieceName) {
  // get the piece using its name
  const piece = NFTStore.artPieces.find(
    (piece) => piece.pieceName === pieceName
  );
  // add buyer to owner list
  piece.ownerList.push(buyer);
  // add piece price to store credit
  NFTStore.storeCredits += piece.price;
}

const buyer = {
  name: "Rose Daniel",
  userID: 23849,
  purchaseDate: "11/29/2021",
};

buyPiece(NFTStore, buyer, "Emo Flamingos");

console.log(NFTStore.artPieces[0].ownerList); //see the list with new buyer
console.log(NFTStore.storeCredits); //1030
