function RoleRendering() {
    const { role } = useContext(RoleContext);
  
    if (role === 'teacher') {
      return (
        <>
          <GroupDetail />
          <Note />
        </>
      );
    } else if (role === 'student') {
      return (
        <>
          <GroupDetail />
          <GroupDetailClass />
        </>
      );
    } 
}
