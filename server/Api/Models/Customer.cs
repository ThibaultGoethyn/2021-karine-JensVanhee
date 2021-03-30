using System.Collections.Generic;

namespace Api.Models
{
    public class Customer
    {
        #region Properties
        public int CustomerId { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public List<Game> OwnedGames { get; set; }
        #endregion

        #region Constructors
        public Customer(string firstname, string lastname, string email, string password)
        {
            this.Firstname = firstname;
            this.Lastname = lastname;
            this.Email = email;
            this.Password = password;
        }
        #endregion

        #region Methods

        #endregion
    }
}
