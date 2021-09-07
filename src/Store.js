class Store {
    reviewList = [ /* reviewList array containing 2 items */
        {review: "This is the best film ever", stars: 5},
        {review: "I completely agree", stars: 4}
    ];

    addReview(e) { /* Method 1: add new reviews to reviewList */
        this.reviewList.push(e);
    }

    get reviewCount() {  /* Method 2: get average score inputted by users */
        return this.reviewList.length;
    }

    get averageScore() {
        let avr = 0;  /* Method 3: get size of reviewList */
        this.reviewList.map(e => avr += e.stars);
        return Math.round(avr / this.reviewList.length * 100) / 100;
    }
}

export default Store;