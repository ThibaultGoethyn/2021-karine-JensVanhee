using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Api.Models
{
    public class Customer
    {
        #region Properties
        public int CustomerId { get; set; }

        [Required]
        public string Firstname { get; set; }

        [Required]
        public string Lastname { get; set; }

        [Required]
        public string Email { get; set; }

        public double Balance { get; set; }

        public ICollection<Game> Games { get; set; }
        #endregion

        #region Constructors
        public Customer()
        {

        }

        public Customer(string firstname, string lastname, string email)
        {
            this.Firstname = firstname;
            this.Lastname = lastname;
            this.Email = email;
        }
        #endregion

        #region Methods
        public void BuyGame(Game game, bool isNew)
        {
            if (isNew && Balance >= game.NewPrice)
            {
                if (game.NewStock > 0)
                {
                    Balance -= game.NewPrice;
                    game.NewStock--;
                    Games.Add(game);
                }
                else
                    throw new ArgumentException($"{game.Title} for the {game.GameConsole} is not available new, try buying it used or try again later.");
            }
            else if (!isNew && Balance >= game.UsedPrice)
            {
                if (game.UsedStock > 0)
                {
                    Balance -= game.UsedPrice;
                    game.UsedStock--;
                    Games.Add(game);
                }
                else
                    throw new ArgumentException($"{game.Title} for the {game.GameConsole} is not available used, try buying it new or try again later.");
            }
            else
                throw new ArgumentException($"Your balance is to low to buy {game.Title} in {(isNew ? "new" : "used")} condition.");
        }

        public void AddBalance(double amount)
        {
            if (amount >= 10)
                Balance += amount;
            else
                throw new ArgumentException("Only an amount greater than or equal to €10.00 can be added to your balance.");
        }
        #endregion
    }
}
