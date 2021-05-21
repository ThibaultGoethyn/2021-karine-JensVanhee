using Api.Models;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Api.DTOs
{
    public class GameDTO
    {
        [Required]
        public string Title { get; set; }

        public string Description { get; set; }

        [Required]
        public string GameConsole { get; set; }

        [Required]
        public double NewPrice { get; set; }

        [Required]
        public double UsedPrice { get; set; }

        public int NewStock { get; set; }

        public int UsedStock { get; set; }

        public ICollection<User> Customers { get; set; }
    }
}
