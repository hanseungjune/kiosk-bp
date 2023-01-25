function ModifyPwdNext({ next, setNext, pwdRegExp, current, setIsNext }) {
  const onChange = (e) => {
    const inputValue = e.target.value;
    setNext(inputValue);
    if (pwdRegExp.test(next) && inputValue !== current) {
      setIsNext(true);
    } else {
      setIsNext(false);
    }
  };
  return (
    <div>
      <form>
        <label htmlFor="nextPwd">변경 비밀번호 : </label>
        <input
          type="password"
          id="nextPwd"
          autoComplete="off"
          required
          placeholder="변경 비밀번호"
          onChange={onChange}
        />
      </form>
    </div>
  );
}

export default ModifyPwdNext;
