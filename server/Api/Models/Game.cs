using System;
using System.ComponentModel.DataAnnotations;
using System.Xml.Serialization;

namespace Api.Models
{
    [Serializable]
    [XmlRoot("Games"), XmlType("Games")]
    public class Game
    {
        #region Properties
        [Required]
        public int GameId { get; set; }

        [Required]
        [XmlElement("title")]
        public string Title { get; set; }

        [XmlElement("description")]
        public string Description { get; set; }

        [Required]
        [XmlElement("console")]
        public GameConsole Console { get; set; }

        [Required]
        [XmlElement("newPrice")]
        public double NewPrice { get; set; }

        [Required]
        [XmlElement("usedPrice")]
        public double UsedPrice { get; set; }

        [Required]
        [XmlElement("newStock")]
        public int NewStock { get; set; }

        [XmlElement("usedStock")]
        public int UsedStock { get; set; }
        #endregion

        #region Constructors
        public Game()
        {
        }

        public Game(string title, string description, GameConsole console, double newPrice, double usedPrice, int newStock, int usedStock)
        {
            this.Title = title;
            this.Description = description;
            this.Console = console;
            this.NewPrice = newPrice;
            this.UsedPrice = usedPrice;
            this.NewStock = newStock;
            this.UsedStock = usedStock;
        }
        #endregion

        #region Methods

        #endregion
    }
}
