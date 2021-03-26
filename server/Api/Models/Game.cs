namespace Api.Models
{
    public class Game
    {
        #region Properties
        public int GameId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public Console Console { get; set; }

        public double NewPrice { get; set; }
        public double UsedPrice { get; set; }
        public int NewStock { get; set; }
        public int UsedStock { get; set; }
        #endregion

        #region Constructors

        #endregion

        #region Methods
        
        #endregion
    }
}
