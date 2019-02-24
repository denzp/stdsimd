var N=null,E="",T="t",U="u",searchIndex={};
var R=["core_arch","i8x16","result","std_detect"];
searchIndex[R[3]]={"doc":"Run-time feature detection for the Rust standard library.","i":[[14,"is_x86_feature_detected",R[3],"Prevents compilation if `is_x86_feature_detected` is used…",N,N],[14,"is_arm_feature_detected",E,"Prevents compilation if `is_arm_feature_detected` is used…",N,N],[14,"is_aarch64_feature_detected",E,"Prevents compilation if `is_aarch64_feature_detected` is…",N,N],[14,"is_powerpc_feature_detected",E,"Prevents compilation if `is_powerpc_feature_detected` is…",N,N],[14,"is_powerpc64_feature_detected",E,"Prevents compilation if `is_powerpc64_feature_detected` is…",N,N],[14,"is_mips64_feature_detected",E,"Prevents compilation if `is_mips64_feature_detected` is…",N,N],[14,"is_mips_feature_detected",E,"Checks if `mips` feature is enabled.",N,N]],"p":[]};
searchIndex[R[0]]={"doc":"SIMD and vendor intrinsics module.","i":[[0,"mips",R[0],"Platform-specific intrinsics for the `mips` platform.",N,N],[3,R[1],"core_arch::mips","MIPS-specific 128-bit wide vector of 16 packed `i8`.",N,N],[5,"__msa_add_a_b",E,"Vector Add Absolute Values.",N,[[[R[1]],[R[1]]],[R[1]]]],[5,"break_",E,"Generates the trap instruction `BREAK`",N,N],[11,"try_from",E,E,0,[[[U]],[R[2]]]],[11,"from",E,E,0,[[[T]],[T]]],[11,"try_into",E,E,0,[[["self"]],[R[2]]]],[11,"into",E,E,0,[[["self"]],[U]]],[11,"borrow",E,E,0,[[["self"]],[T]]],[11,"borrow_mut",E,E,0,[[["self"]],[T]]],[11,"type_id",E,E,0,[[["self"]],["typeid"]]],[11,"fmt",E,E,0,[[["self"],["formatter"]],[R[2]]]],[11,"clone",E,E,0,[[["self"]],[R[1]]]]],"p":[[3,R[1]]]};
initSearch(searchIndex);addSearchOptions(searchIndex);