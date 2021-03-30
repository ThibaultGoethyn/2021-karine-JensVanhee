using Api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Api.Data.Mappers
{
    public class GameConfiguration : IEntityTypeConfiguration<Game>
    {
        public void Configure(EntityTypeBuilder<Game> builder)
        {
            builder.ToTable("Games");
            builder.HasKey(x => x.GameId);
            builder.Property(x => x.Title).IsRequired().HasMaxLength(50);
            builder.Property(x => x.Description);
            builder.Property(x => x.Console).IsRequired();

            builder.Property(x => x.NewPrice).IsRequired();
            builder.Property(x => x.UsedPrice);
            builder.Property(x => x.NewStock).IsRequired();
            builder.Property(x => x.UsedStock);
        }
    }
}
