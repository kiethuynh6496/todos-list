const Todos = () => {
  return (
    <main id="todolist">
      <h1>
        Danh sách
        <span>Việc hôm nay không để ngày mai.</span>
      </h1>

      <li class="done">
        <span class="label">123</span>
        <div class="actions">
          <button class="btn-picto" type="button">
            <i class="fas fa-edit"></i>
          </button>
          <button
            class="btn-picto"
            type="button"
            aria-label="Delete"
            title="Delete"
          >
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </li>
      <li>
        <span class="label">123</span>
        <div class="actions">
          <button class="btn-picto" type="button">
            <i class="fas fa-user-edit"></i>
          </button>
          <button
            class="btn-picto"
            type="button"
            aria-label="Delete"
            title="Delete"
          >
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </li>
      <p>Danh sách nhiệm vụ trống.</p>

      <form>
        <label htmlFor="name">Thêm nhiệm vụ mới</label>
        <input type="text" name="name" id="name" />
        <input type="text" name="id" id="name" />
        <button type="button">Thêm mới</button>
      </form>
    </main>
  );
};

export default Todos;
