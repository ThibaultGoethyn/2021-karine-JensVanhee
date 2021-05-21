namespace Api.Models
{
    public interface IUserRepository
    {
        User GetByEmail(string email);

        void Add(User customer);
        void Update(User customer);
        void SaveChanges();
    }
}
