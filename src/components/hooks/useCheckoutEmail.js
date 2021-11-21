module.exports ={
    checkoutEmail(mail) {
        const target = /@example.com$/;
        return target.test(mail);
    }
}