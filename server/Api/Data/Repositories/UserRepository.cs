using Api.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace Api.Data.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly Context _context;
        private readonly DbSet<User> _customers;

        public UserRepository(Context dbContext)
        {
            _context = dbContext;
            _customers = dbContext.Customers;
        }

        public void Add(User customer)
        {
            _customers.Add(customer);
        }

        public User GetByEmail(string email)
        {
            return _customers.Include(x => x.Games).SingleOrDefault(x => x.Email == email);
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }

        public void Update(User customer)
        {
            _context.Update(customer);
        }
    }
}
