using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Api.Models
{
    public class Customer
    {
        #region Properties
        [Required]
        public int CustomerId { get; set; }

        [Required]
        public string Firstname { get; set; }

        [Required]
        public string Lastname { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        public List<Game> Games { get; set; }
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
