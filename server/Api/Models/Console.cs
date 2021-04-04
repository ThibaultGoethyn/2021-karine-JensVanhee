using System.Xml.Serialization;

namespace Api.Models
{
    public enum Console
    {
        [XmlEnum("PLAYSTATION_3")]
        PLAYSTATION_3,
        [XmlEnum("PLAYSTATION_4")]
        PLAYSTATION_4,
        [XmlEnum("PLAYSTATION_5")]
        PLAYSTATION_5,
        [XmlEnum("PLAYSTATION_VITA")]
        PLAYSTATION_VITA,
        [XmlEnum("XBOX_360")]
        XBOX_360,
        [XmlEnum("XBOX_ONE")]
        XBOX_ONE,
        [XmlEnum("XBOX_SERIES_X")]
        XBOX_SERIES_X,
        [XmlEnum("NINTENDO_DS")]
        NINTENDO_DS,
        [XmlEnum("NINTENDO_3DS")]
        NINTENDO_3DS,
        [XmlEnum("NINTENDO_SWITCH")]
        NINTENDO_SWITCH
    }
}
