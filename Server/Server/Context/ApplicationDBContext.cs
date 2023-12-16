using Microsoft.EntityFrameworkCore;
using Server.Models;
using System;

namespace Server.Context
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options) 
        { 
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(entity =>
            {
                // Other configurations...

                entity.Property(e => e.Birthday)
                    .HasConversion(
                        v => v.UtcDateTime,
                        v => new DateTimeOffset(v, TimeSpan.Zero)
                    )
                    .IsRequired();
            });
           
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Server.Models.Partners> Partners { get; set; } = default!;
    }
}
